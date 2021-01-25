using System;
using System.Collections.Generic;

namespace Domain
{
    public class Nadjeno : Oglas
    {
        public String JelSklonjen{get; set;}
        public Boolean ProverenCip{get; set;}
        public ICollection<SlikeNadjen> SlikeNadjen{get; set;}
    }
}