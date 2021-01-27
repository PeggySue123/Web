using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.IzgubljeneZivotinje
{
    public class Details
    {
        public class Query : IRequest<IzgubljenDTO>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, IzgubljenDTO>
        {
            private readonly DataContext context;
            private readonly IMapper mapa;
            public Handler(DataContext context, IMapper mapa)
            {
                this.mapa = mapa;
                this.context = context;
            }

            public async Task<IzgubljenDTO> Handle(Query request, CancellationToken cancellationToken)
            {
                var oglasi = await this.context.IzgubljeneZivotinje.FindAsync(request.Id);
                return mapa.Map<Izgubljeno, IzgubljenDTO>(oglasi);
            }
        }
    }
}