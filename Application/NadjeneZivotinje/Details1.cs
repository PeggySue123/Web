using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.NadjeneZivotinje
{
    public class Details1
    {
        public class Query : IRequest<Nadjeno>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Nadjeno>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Nadjeno> Handle(Query request, CancellationToken cancellationToken)
            {
                var oglasi = await this.context.NadjeneZivotinje.FindAsync(request.Id);
                return oglasi;
            }
        }
    }
}