using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Application.NadjeneZivotinje;
using System;
using System.Threading;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NadjeneZivotinjeController : ControllerBase
    {
        private readonly IMediator mediator;
        public NadjeneZivotinjeController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Nadjeno>>> List()
        {
            return await this.mediator.Send(new List1.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Nadjeno>> Details(Guid id)
        {
            return await this.mediator.Send(new Details1.Query{Id=id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create1.Command command)
        {
            return await this.mediator.Send(command);
        }
    }
}