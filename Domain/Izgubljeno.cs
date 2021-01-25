using System;
using System.Collections.Generic;

namespace Domain
{
    public class Izgubljeno : Oglas
    {
        public String Starost{get; set;}
        public String LokacijaGdeJeIzgubljen{get; set;}
        public String ImeZivotinje{get; set;}
        public ICollection<SlikeIzgubljen> SlikeIzgubljen{get; set;}

    }
}
