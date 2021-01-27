using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;
using Domain;
using System.Collections.Generic;
using System.Linq;

namespace Application.UdomljeneZivotinje
{
    public class Create2
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public String Vrsta { get; set; }
            public String Rasa { get; set; }
            public String ImeKontakta { get; set; }
            public String TelefonKontakta { get; set; }
            public String TekstOglasa { get; set; }
            public Boolean ImaCip { get; set; }
            public String Starost { get; set; }
            public String ImeZivotinje { get; set; }
            public Boolean Sterilisan{get; set;}
            public Boolean ObavezanUgovor{get; set;}
            public Boolean JelImaPapire{get; set;}
            public Boolean JelVakcinisan{get; set;}
            public String GdeSeZahtevaDaZivi{get; set;}
            public String[] NizSlika{get; set;}
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var oglasi = new Udomljavanje
                {
                    Id = request.Id,
                    Vrsta = request.Vrsta,
                    Rasa = request.Rasa,
                    ImeKontakta = request.ImeKontakta,
                    TelefonKontakta = request.TelefonKontakta,
                    TekstOglasa = request.TekstOglasa,
                    ImaCip = request.ImaCip,
                    Starost = request.Starost,
                    ImeZivotinje = request.ImeZivotinje,
                    Sterilisan = request.Sterilisan,
                    ObavezanUgovor = request.ObavezanUgovor,
                    JelImaPapire = request.JelImaPapire,
                    JelVakcinisan = request.JelVakcinisan,
                    GdeSeZahtevaDaZivi = request.GdeSeZahtevaDaZivi
                };

                oglasi.SlikeUdomljen = new List<SlikeUdomljen>();
                for(int i=0; i<request.NizSlika.Count(); i++)
                {
                    oglasi.SlikeUdomljen.Add(new SlikeUdomljen
                    {
                        SlikaObj = new Slika{
                            Put = request.NizSlika[i]
                        }
                    });
                }

                this.context.UdomljeneZivotinje.Add(oglasi);
                var success = await this.context.SaveChangesAsync() > 0;
                if(success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}