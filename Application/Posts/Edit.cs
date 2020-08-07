using System.Net;
using System;
using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Persistence;
using Application.Errors;
using Markdig;

namespace Application.Posts
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Title { get; set; }
            public string Content { get; set; }
            // public string Thumbnail { get; set; }
            public string Description { get; set; }
            public string Category { get; set; }
            public DateTime UpdatedAt { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {

            }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly ApplicationDbContext _context;
            public Handler(ApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var post = await _context.Posts.FindAsync(request.Id);

                if (post == null)
                    throw new RestException(HttpStatusCode.NotFound,
                        new { Post = "찾을 수 없습니다." });

                post.Title = request.Title ?? post.Title;
                post.Content = request.Content ?? post.Content;
                post.Description = request.Description ?? post.Description;
                post.Category = request.Category ?? post.Category;
                // post.Thumbnail = request.Thumbnail ?? post.Thumbnail;
                post.UpdatedAt = DateTime.Now.AddHours(9);

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("데이터를 저장하는 동안 오류가 발생했습니다.");
            }
        }
    }
}