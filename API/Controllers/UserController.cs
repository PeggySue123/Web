using System.Threading.Tasks;
using Application.User;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    { 
        private readonly IMediator mediator;
        public UserController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpPost("login")]

        public async Task<ActionResult<User>> Login(Login.Query query)
        {
            return await mediator.Send(query);
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(Register.Command command)
        {
            return await mediator.Send(command);
        }
    }
}