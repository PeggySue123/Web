using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace Application.User
{
    public class Login
    {
        public class Query : IRequest<User>
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }


        public class Handler : IRequestHandler<Query, User>
        {
            private readonly UserManager<AppUser> userManager;

            private readonly SignInManager<AppUser> signInManager;
            private readonly IJwtGenerator jwtGenerator;

            public Handler(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IJwtGenerator jwtGenerator)
            {
                this.jwtGenerator = jwtGenerator;
                this.signInManager = signInManager;

                this.userManager = userManager;

            }

            public async Task<User> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await this.userManager.FindByEmailAsync(request.Email);
                if (user == null)
                    throw new Exception("An error has been occured");
                var result = await this.signInManager.CheckPasswordSignInAsync(user, request.Password, false);

                if (result.Succeeded)
                {
                    return new User
                    {
                        DisplayName = user.DisplayName,
                        Token = this.jwtGenerator.CreateToken(user),
                        Username = user.UserName
                    };
                }
                throw new Exception("Unauthorized!");
            }
        }
    }
}