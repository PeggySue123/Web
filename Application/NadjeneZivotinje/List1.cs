using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;

namespace Application.NadjeneZivotinje
{
    public class List1
    {
        public class Query : IRequest<List<Nadjeno>> { }
        public class Handler : IRequestHandler<Query, List<Nadjeno>>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<List<Nadjeno>> Handle(Query request, CancellationToken cancellationToken)
            {

                var oglasi = await this.context.NadjeneZivotinje.ToListAsync();
                return oglasi;
            }
        }
    }
}