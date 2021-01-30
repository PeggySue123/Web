using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.UdomljeneZivotinje
{
    public class Update2
    {
        public class Command : IRequest
        {
            public Guid Id{get; set;}
            public String Vrsta{get; set;}
            public String Rasa{get; set;}
            public String ImeKontakta{get; set;}
            public String TelefonKontakta{get; set;}
            public String TekstOglasa{get; set;}
            public Boolean? ImaCip{get; set;}
            public String ImeZivotinje{get; set;}
            public String Starost{get; set;}
            public Boolean? Sterilisan{get; set;}
            public Boolean? ObavezanUgovor{get; set;}
            public Boolean? JelImaPapire{get; set;}
            public Boolean? JelVakcinisan{get; set;}
            public String GdeSeZahtevaDaZivi{get; set;}

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
                var oglas = await this.context.UdomljeneZivotinje.FindAsync(request.Id);
                if(oglas == null)
                    throw new Exception("Could not find oglas");
                
                oglas.ImaCip = request.ImaCip ?? oglas.ImaCip;
                oglas.ImeKontakta = request.ImeKontakta ?? oglas.ImeKontakta;
                oglas.Rasa = request.Rasa ?? oglas.Rasa;
                oglas.TekstOglasa = request.TekstOglasa ?? oglas.TekstOglasa;
                oglas.TelefonKontakta = request.TelefonKontakta ?? oglas.TelefonKontakta;
                oglas.Vrsta = request.Vrsta ?? oglas.Vrsta;
                oglas.Starost = request.Starost ?? oglas.Starost;
                oglas.Sterilisan = request.Sterilisan ?? oglas.Sterilisan;
                oglas.ObavezanUgovor = request.ObavezanUgovor ?? oglas.ObavezanUgovor;
                oglas.JelImaPapire = request.JelImaPapire ?? oglas.JelImaPapire;
                oglas.JelVakcinisan = request.JelVakcinisan ?? oglas.JelVakcinisan;
                oglas.GdeSeZahtevaDaZivi = request.GdeSeZahtevaDaZivi ?? oglas.GdeSeZahtevaDaZivi;

                var success = await this.context.SaveChangesAsync() > 0;
                if(success) return Unit.Value;
                throw new System.Exception("Problem saving changes");
            }
        }
    }
}