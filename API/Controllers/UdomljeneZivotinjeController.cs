using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Application.UdomljeneZivotinje;
using System;
using System.Threading;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UdomljeneZivotinjeController : ControllerBase
    {
        private readonly IMediator mediator;
        public UdomljeneZivotinjeController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Udomljavanje>>> List()
        {
            return await this.mediator.Send(new List2.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Udomljavanje>> Details(Guid id)
        {
            return await this.mediator.Send(new Details2.Query{Id=id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create2.Command command)
        {
            return await this.mediator.Send(command);
        }
    }
}