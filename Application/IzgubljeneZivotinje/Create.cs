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

namespace Application.IzgubljeneZivotinje
{
    public class Create
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
            public String LokacijaGdeJeIzgubljen { get; set; }
            public String ImeZivotinje { get; set; }
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
                var oglasi = new Izgubljeno
                {
                    Id = request.Id,
                    Vrsta = request.Vrsta,
                    Rasa = request.Rasa,
                    ImeKontakta = request.ImeKontakta,
                    TelefonKontakta = request.TelefonKontakta,
                    TekstOglasa = request.TekstOglasa,
                    ImaCip = request.ImaCip,
                    Starost = request.Starost,
                    LokacijaGdeJeIzgubljen = request.LokacijaGdeJeIzgubljen,
                    ImeZivotinje = request.ImeZivotinje
                };

              /* string fileName = "";
                string path = Directory.GetCurrentDirectory() + "\\Client\\img\\Slike\\";
                oglasi.SlikeIzgubljen = new List<SlikeIzgubljen>();
                foreach(IFormFile slika in request.Slike)
                {
                    if (slika != null) {
                    fileName += slika.FileName;
                    path = Path.Combine(path, fileName);
                    using (var fs = new FileStream(path, FileMode.Create)) {
                        await slika.CopyToAsync(fs);
                    }
                    oglasi.SlikeIzgubljen.Add(new SlikeIzgubljen
                    {
                        SlikaObj = new Slika{
                            Put = path
                        }
                    });
                    }
                }*/

                this.context.IzgubljeneZivotinje.Add(oglasi);
                var success = await this.context.SaveChangesAsync() > 0;
                if(success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}