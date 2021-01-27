using System;
using System.Collections.Generic;
using Domain;

namespace Application.UdomljeneZivotinje
{
    public class UdomljenDTO
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
        public ICollection<SlikeUdomljenDTO> SlikeUdomljen{get; set;}
    }
}