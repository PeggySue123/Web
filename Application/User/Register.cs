using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;
using System;
using Domain;
using Microsoft.AspNetCore.Identity;
using Application.Interfaces;
using System.Linq;
using Microsoft.EntityFrameworkCore;

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

        public class Handler : IRequestHandler<Command, User>
        {
            private readonly DataContext context;
            private readonly UserManager<AppUser> userManager;
            private readonly IJwtGenerator jwtGenerator;
            public Handler(DataContext context, UserManager<AppUser> userManager, IJwtGenerator jwtGenerator)
            {
                this.jwtGenerator = jwtGenerator;
                this.userManager = userManager;
                this.context = context;
            }

            public async Task<User> Handle(Command request, CancellationToken cancellationToken)
            {
                if(await context.Users.Where(x => x.Email == request.Email).AnyAsync())
                    throw new Exception("Email already exist");
                if(await context.Users.Where(x => x.UserName == request.Username).AnyAsync())
                    throw new Exception("Username already exist");

                var user = new AppUser
                {
                    DisplayName = request.DisplayName,
                    Email = request.Email,
                    UserName = request.Username
                };
                var result = await userManager.CreateAsync(user, request.Password);

                if(result.Succeeded)
                {
                    return new User
                    {
                        DisplayName = user.DisplayName,
                        Token = jwtGenerator.CreateToken(user),
                        Username = user.UserName
                    };
                }               
                throw new Exception("Problem creating user");
            }
        }
    }
}