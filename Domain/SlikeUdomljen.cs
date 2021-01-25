using System;

namespace Domain
{
    public class SlikeUdomljen
    {
        public Guid OglasId{get; set;}
        public Guid SlikaId{get; set;}
        public Udomljavanje UdomljenObj{get; set;}
        public Slika SlikaObj{get; set;}
    }
}