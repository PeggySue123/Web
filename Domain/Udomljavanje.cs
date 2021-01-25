using System;
using System.Collections.Generic;

namespace Domain
{
    public class Udomljavanje : Oglas
    {
        public String ImeZivotinje{get; set;}
        public String Starost{get; set;}
        public Boolean Sterilisan{get; set;}
        public Boolean ObavezanUgovor{get; set;}
        public Boolean JelImaPapire{get; set;}
        public Boolean JelVakcinisan{get; set;}
        public String GdeSeZahtevaDaZivi{get; set;}
        public ICollection<SlikeUdomljen> SlikeUdomljen{get; set;}
    }
}