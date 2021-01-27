using System;
using System.Collections.Generic;
using Domain;

namespace Application.IzgubljeneZivotinje
{
    public class IzgubljenDTO
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
        public ICollection<SlikeIzgubljenDTO> SlikeIzgubljen{get; set;}
    }
}