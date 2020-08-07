using System.Collections.Generic;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Profiles
{
    public class Details
    {
        public class Query : IRequest<Profile>
        {
            public string Username { get; set; }
        }

        public class Handler : IRequestHandler<Query, Profile>
        {
            private readonly ApplicationDbContext _context;
            private readonly IMapper _mapper;
            public Handler(ApplicationDbContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }
            public async Task<Profile> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _context.Users.SingleOrDefaultAsync(x => x.UserName == request.Username);
                var posts = await _context.Posts.ToListAsync();

                if (user == null)
                {
                    throw new RestException(HttpStatusCode.NotFound,
                        new { User = "찾을 수 없습니다." });
                }

                var postToReturn = _mapper.Map<List<Post>, List<UserPostDto>>(posts);
                var filteredPost = postToReturn.FindAll(p => p.AppUserId == user.Id);

                return new Profile
                {
                    DisplayName = user.DisplayName,
                    Username = user.UserName,
                    Image = user.Photo?.Url,
                    Posts = filteredPost,
                    Photo = user.Photo,
                    Bio = user.Bio
                };
            }
        }
    }
}