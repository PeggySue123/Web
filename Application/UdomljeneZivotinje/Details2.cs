using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.UdomljeneZivotinje
{
    public class Details2
    {
        public class Query : IRequest<UdomljenDTO>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, UdomljenDTO>
        {
            private readonly DataContext context;
            private readonly IMapper mapa;
            public Handler(DataContext context, IMapper mapa)
            {
                this.mapa = mapa;
                this.context = context;
            }

            public async Task<UdomljenDTO> Handle(Query request, CancellationToken cancellationToken)
            {
                var oglasi = await this.context.UdomljeneZivotinje.FindAsync(request.Id);
                return mapa.Map<Udomljavanje, UdomljenDTO>(oglasi);
            }
        }
    }
}