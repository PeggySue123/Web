using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;
using Domain;
using System.Collections.Generic;

namespace Application.IzgubljeneZivotinje
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id {get; set;}
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var oglas = await this.context.IzgubljeneZivotinje.FindAsync(request.Id);

                if(oglas==null)
                    throw new Exception("Could not find oglas");
                this.context.Remove(oglas);
                var success = await this.context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;
                throw new Exception("Problem saving changes");
            }
        }
    }
}