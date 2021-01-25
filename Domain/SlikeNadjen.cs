using System;
namespace Domain
{
    public class SlikeNadjen
    {
        public Guid OglasId{get; set;}
        public Guid SlikaId{get; set;}
        public Nadjeno NadjenObj{get; set;}
        public Slika SlikaObj{get; set;}
    }
}