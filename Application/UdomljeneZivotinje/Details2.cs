using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.UdomljeneZivotinje
{
    public class Details2
    {
        public class Query : IRequest<Udomljavanje>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Udomljavanje>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Udomljavanje> Handle(Query request, CancellationToken cancellationToken)
            {
                var oglasi = await this.context.UdomljeneZivotinje.FindAsync(request.Id);
                return oglasi;
            }
        }
    }
}