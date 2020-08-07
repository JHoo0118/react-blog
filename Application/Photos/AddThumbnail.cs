using System.Net;
using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Http;
using Persistence;
using Application.Errors;
using Domain;

namespace Application.Photos
{
    public class AddThumbnail
    {
        public class Command : IRequest<Photo>
        {
            public IFormFile File { get; set; }
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Photo>
        {
            private readonly ApplicationDbContext _context;
            private readonly IPhotoAccessor _photoAccessor;
            public Handler(ApplicationDbContext context, IPhotoAccessor photoAccessor)
            {
                _photoAccessor = photoAccessor;
                _context = context;
            }

            public async Task<Photo> Handle(Command request, CancellationToken cancellationToken)
            {
                var post = await _context.Posts.FindAsync(request.Id);

                var hasThumbnail = post.Thumbnail;

                if (post == null)
                    throw new RestException(HttpStatusCode.NotFound,
                        new { Post = "찾을 수 없습니다." });

                var photoUploadResult = _photoAccessor.AddThumbnail(request.File);

                if (hasThumbnail != null)
                {
                    var result = _photoAccessor.DeletePhoto(hasThumbnail.Id);

                    if (result == null)
                        throw new Exception("삭제하는 동안 오류가 발생했습니다.");

                    post.Thumbnail.Id.Remove(0);
                }

                var photo = new Photo
                {
                    Url = photoUploadResult.Url,
                    Id = photoUploadResult.PublicId
                };

                post.Thumbnail = photo;

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return photo;

                throw new Exception("데이터를 저장하는 동안 오류가 발생했습니다.");
            }
        }
    }
}