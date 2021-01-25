using System;
using System.Collections.Generic;
namespace Domain
{
    public class Oglas
    {
        public Guid Id{get; set;}
        public String Vrsta{get; set;}
        public String Rasa{get; set;}
        public String ImeKontakta{get; set;}
        public String TelefonKontakta{get; set;}
        public String TekstOglasa{get; set;}
        public Boolean ImaCip{get; set;}
        
    }
}