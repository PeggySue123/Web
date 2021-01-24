using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.IzgubljeneZivotinje
{
    public class Details
    {
        public class Query : IRequest<Izgubljeno>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Izgubljeno>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Izgubljeno> Handle(Query request, CancellationToken cancellationToken)
            {
                var oglasi = await this.context.IzgubljeneZivotinje.FindAsync(request.Id);
                return oglasi;
            }
        }
    }
}