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

namespace Application.IzgubljeneZivotinje
{
    public class List
    {
        public class Query : IRequest<List<IzgubljenDTO>> { }
        public class Handler : IRequestHandler<Query, List<IzgubljenDTO>>
        {
            private readonly DataContext context;
            private readonly IMapper mapa;
            public Handler(DataContext context, IMapper mapa)
            {
                this.mapa = mapa;
                this.context = context;
            }

            public async Task<List<IzgubljenDTO>> Handle(Query request, CancellationToken cancellationToken)
            {

                var oglasi = await this.context.IzgubljeneZivotinje
                    .Include(x => x.SlikeIzgubljen)
                    .ThenInclude(x => x.SlikaObj)
                    .ToListAsync();
                return mapa.Map<List<Izgubljeno>, List<IzgubljenDTO>>(oglasi);
            }
        }
    }
}