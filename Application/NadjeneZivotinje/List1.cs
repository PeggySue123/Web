using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using AutoMapper;

namespace Application.NadjeneZivotinje
{
    public class List1
    {
        public class Query : IRequest<List<NadjenDTO>> { }
        public class Handler : IRequestHandler<Query, List<NadjenDTO>>
        {
            private readonly DataContext context;
            private readonly IMapper mapa;
            public Handler(DataContext context, IMapper mapa)
            {
                this.mapa = mapa;
                this.context = context;
            }

            public async Task<List<NadjenDTO>> Handle(Query request, CancellationToken cancellationToken)
            {

                var oglasi = await this.context.NadjeneZivotinje
                    .Include(x => x.SlikeNadjen)
                    .ThenInclude(x => x.SlikaObj)
                    .ToListAsync();
                return mapa.Map<List<Nadjeno>, List<NadjenDTO>>(oglasi);
            }
        }
    }
}