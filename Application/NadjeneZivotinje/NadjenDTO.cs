using System;
using System.Collections.Generic;
using Domain;

namespace Application.NadjeneZivotinje
{
    public class NadjenDTO
    {
        public Guid Id { get; set; }
        public String Vrsta { get; set; }
        public String Rasa { get; set; }
        public String ImeKontakta { get; set; }
        public String TelefonKontakta { get; set; }
        public String TekstOglasa { get; set; }
        public Boolean ImaCip { get; set; }
        public String JelSklonjen{get; set;}
        public Boolean ProverenCip{get; set;}
        public ICollection<SlikeNadjenDTO> SlikeNadjen{get; set;}
    }
}