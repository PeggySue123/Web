using System;
using System.Collections.Generic;
namespace Domain
{
    public class Slika
    {
        public Guid Id{get; set;}
        public String Put{get; set;}
        public ICollection<SlikeOglasa> SlikeOglasa{get; set;}
    }
}