using System;
using System.Collections.Generic;
namespace Domain
{
    public class Slika
    {
        public Guid Id{get; set;}
        public String Put{get; set;}
        public ICollection<SlikeIzgubljen> SlikeIzgubljen{get; set;}
        public ICollection<SlikeNadjen> SlikeNadjen{get; set;}
        public ICollection<SlikeUdomljen> SlikeUdomljen{get; set;}
    }
}