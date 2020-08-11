using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Application.Interfaces;
using Application.Validators;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.User
{
    public class Register
    {
        public class Command : IRequest<User>
        {
            public string DisplayName { get; set; }
            public string Username { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.DisplayName).NotEmpty();
                RuleFor(x => x.Username).NotEmpty();
                RuleFor(x => x.Email).NotEmpty().EmailAddress().WithMessage("올바른 이메일 형식이 아닙니다.");
                RuleFor(x => x.Password).Password();
            }
        }

        public class Hanlder : IRequestHandler<Command, User>
        {
            private readonly ApplicationDbContext _context;
            private readonly UserManager<AppUser> _userManager;
            private readonly IJwtGenerator _jwtGenerator;
            public Hanlder(ApplicationDbContext context, UserManager<AppUser> userManager, IJwtGenerator jwtGenerator)
            {
                _jwtGenerator = jwtGenerator;
                _userManager = userManager;
                _context = context;
            }

            public async Task<User> Handle(Command request, CancellationToken cancellationToken)
            {
                if (await _context.Users.AnyAsync(x => x.Email == request.Email))
                    throw new RestException(HttpStatusCode.BadRequest,
                        new { Email = "이미 존재하는 이메일입니다. " });


                if (await _context.Users.AnyAsync(x => x.UserName == request.Username))
                    throw new RestException(HttpStatusCode.BadRequest,
                        new { Username = "이미 존재하는 사용자 이름입니다. " });

                var user = new AppUser
                {
                    DisplayName = request.DisplayName,
                    Email = request.Email,
                    UserName = request.Username,
                    RefreshToken = _jwtGenerator.GenerateRefreshToken(),
                    RefreshTokenExpiry = DateTime.Now.AddDays(30)
                };

                var result = await _userManager.CreateAsync(user, request.Password);

                if (result.Succeeded)
                {
                    return new User
                    {
                        DisplayName = user.DisplayName,
                        Token = _jwtGenerator.CreateToken(user),
                        RefreshToken = user.RefreshToken,
                        Username = user.UserName,
                        Image = user.Photo?.Url
                    };
                }

                throw new Exception("회원가입을 하는 동안 오류가 발생했습니다.");
            }
        }
    }
}