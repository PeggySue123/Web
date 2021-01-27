using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using Microsoft.EntityFrameworkCore;
using AutoMapper;

namespace Application.UdomljeneZivotinje
{
    public class List2
    {
        public class Query : IRequest<List<UdomljenDTO>> { }
        public class Handler : IRequestHandler<Query, List<UdomljenDTO>>
        {
            private readonly DataContext context;
            private readonly IMapper mapa;
            public Handler(DataContext context, IMapper mapa)
            {
                this.mapa = mapa;
                this.context = context;
            }

            public async Task<List<UdomljenDTO>> Handle(Query request, CancellationToken cancellationToken)
            {

                var oglasi = await this.context.UdomljeneZivotinje
                    .Include(x => x.SlikeUdomljen)
                    .ThenInclude(x => x.SlikaObj)
                    .ToListAsync();
                return mapa.Map<List<Udomljavanje>, List<UdomljenDTO>>(oglasi);
            }
        }
    }
}