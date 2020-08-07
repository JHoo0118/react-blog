using System;
using System.Threading.Tasks;
using Application.Photos;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class PhotosController : BaseController
    {
        [HttpPost]
        public async Task<ActionResult<Photo>> AddUserPhoto([FromForm] AddUserPhoto.Command command)
        {
            return await Mediator.Send(command);
        }

        [HttpPost("{id}/add")]
        public async Task<ActionResult<Photo>> AddThumbnail(Guid id, [FromForm] AddThumbnail.Command command)
        {
            command.Id = id;
            return await Mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> DeleteThumbnail(Guid id)
        {
            return await Mediator.Send(new DeleteThumbnail.Command { Id = id });
        }

        [HttpDelete("user/{id}")]
        public async Task<ActionResult<Unit>> DeleteUserPhoto(string id)
        {
            return await Mediator.Send(new DeleteUserPhoto.Command { Id = id });
        }
    }
}