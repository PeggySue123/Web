using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Application.IzgubljeneZivotinje;
using System;
using System.Threading;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IzgubljeneZivotinjeController : ControllerBase
    {
        private readonly IMediator mediator;
        public IzgubljeneZivotinjeController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Izgubljeno>>> List()
        {
            return await this.mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Izgubljeno>> Details(Guid id)
        {
            return await this.mediator.Send(new Details.Query{Id=id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await this.mediator.Send(command);
        }
    }
}