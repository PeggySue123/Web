using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.UdomljeneZivotinje
{
    public class List2
    {
        public class Query : IRequest<List<Udomljavanje>> { }
        public class Handler : IRequestHandler<Query, List<Udomljavanje>>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<List<Udomljavanje>> Handle(Query request, CancellationToken cancellationToken)
            {

                var oglasi = await this.context.UdomljeneZivotinje.ToListAsync();
                return oglasi;
            }
        }
    }
}