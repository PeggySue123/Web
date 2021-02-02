using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;
using Domain;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using System.IO;

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
            public IFormFile[] Slike {get; set;}
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


                /*string fileName = "";
                string path = Directory.GetCurrentDirectory() + "\\Client\\img\\Slike\\";
                oglasi.SlikeUdomljen = new List<SlikeUdomljen>();
                foreach(IFormFile slika in request.Slike)
                {
                    if (slika != null) {
                    fileName += slika.FileName;
                    path = Path.Combine(path, fileName);
                    using (var fs = new FileStream(path, FileMode.Create)) {
                        await slika.CopyToAsync(fs);
                    }
                    oglasi.SlikeUdomljen.Add(new SlikeUdomljen
                    {
                        SlikaObj = new Slika{
                            Put = path
                        }
                    });
                    }
                }*/
                

                this.context.UdomljeneZivotinje.Add(oglasi);
                var success = await this.context.SaveChangesAsync() > 0;
                if(success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}