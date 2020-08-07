using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using MediatR;
using Persistence;
using Application.Errors;
using System.Net;

namespace Application.Photos
{
    public class DeleteThumbnail
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly ApplicationDbContext _context;
            private readonly IPhotoAccessor _photoAccessor;
            public Handler(ApplicationDbContext context, IPhotoAccessor photoAccessor)
            {
                _photoAccessor = photoAccessor;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {

                var post = await _context.Posts.FindAsync(request.Id);

                if (post == null)
                    throw new RestException(HttpStatusCode.NotFound,
                        new { Post = "찾을 수 없습니다." });

                var thumbnail = post.Thumbnail;


                if (thumbnail == null)
                    throw new RestException(HttpStatusCode.NotFound,
                        new { Thumbnail = "찾을 수 없습니다." });

                var result = _photoAccessor.DeletePhoto(thumbnail.Id);

                if (result == null)
                    throw new Exception("삭제하는 동안 오류가 발생했습니다.");

                _context.Remove(thumbnail);

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("데이터를 저장하는 동안 오류가 발생했습니다.");
            }
        }
    }
}