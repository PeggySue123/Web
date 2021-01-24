using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;

namespace Application.IzgubljeneZivotinje
{
    public class List
    {
        public class Query : IRequest<List<Izgubljeno>> { }
        public class Handler : IRequestHandler<Query, List<Izgubljeno>>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<List<Izgubljeno>> Handle(Query request, CancellationToken cancellationToken)
            {

                var oglasi = await this.context.IzgubljeneZivotinje.ToListAsync();
                return oglasi;
            }
        }
    }
}