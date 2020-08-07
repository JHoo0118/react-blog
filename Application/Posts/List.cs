using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Posts
{
    public class List
    {
        public class PostEnvelope
        {
            public List<PostDto> Posts { get; set; }
            public int PostCount { get; set; }
        }
        public class Query : IRequest<PostEnvelope>
        {
            public Query(int? limit, int? offset, string category)
            {
                Limit = limit;
                Offset = offset;
                Category = category;
            }
            public int? Limit { get; set; }
            public int? Offset { get; set; }
            public string Category { get; set; }
        }

        public class Handler : IRequestHandler<Query, PostEnvelope>
        {
            private readonly ApplicationDbContext _context;
            private readonly IMapper _mapper;
            public Handler(ApplicationDbContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<PostEnvelope> Handle(Query request, CancellationToken cancellationToken)
            {
                var queryable = _context.Posts.AsQueryable();

                if (request.Category != null)
                {
                    queryable = queryable.Where(x => x.Category.ToLower().Replace(".", "dot").Replace(" ", "-") == request.Category.ToLower().Replace(".", "dot").Replace(" ", "-"));
                }

                var posts = await queryable.OrderByDescending(x => x.CreatedAt)
                    .Skip(request.Offset ?? 0)
                    .Take(request.Limit ?? 3).ToListAsync();

                return new PostEnvelope
                {
                    Posts = _mapper.Map<List<Post>, List<PostDto>>(posts),
                    PostCount = queryable.Count()
                };
            }
        }
    }
}