using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.NadjeneZivotinje
{
    public class Details1
    {
        public class Query : IRequest<NadjenDTO>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, NadjenDTO>
        {
            private readonly DataContext context;
            private readonly IMapper mapa;
            public Handler(DataContext context, IMapper mapa)
            {
                this.mapa = mapa;
                this.context = context;
            }

            public async Task<NadjenDTO> Handle(Query request, CancellationToken cancellationToken)
            {
                var oglasi = await this.context.NadjeneZivotinje.FindAsync(request.Id);
                return mapa.Map<Nadjeno, NadjenDTO>(oglasi);
            }
        }
    }
}