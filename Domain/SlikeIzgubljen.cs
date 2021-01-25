using System;
namespace Domain
{
    public class SlikeIzgubljen
    {
        public Guid OglasId{get; set;}
        public Guid SlikaId{get; set;}
        public Izgubljeno IzgubljenObj{get; set;}
        public Slika SlikaObj{get; set;}
    }
}