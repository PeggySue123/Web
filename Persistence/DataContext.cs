using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Izgubljeno> IzgubljeneZivotinje{get; set;}
        public DbSet<Nadjeno> NadjeneZivotinje{get; set;}
        public DbSet<Slika> SlikeZivotinja{get; set;}
        public DbSet<Udomljavanje> UdomljeneZivotinje{get; set;}
        public DbSet<SlikeOglasa> SveSlike{get; set;}
        protected override void OnModelCreating(ModelBuilder mb)
        {
            base.OnModelCreating(mb);
            mb.Entity<SlikeOglasa>(x => x.HasKey(so => new {so.SlikaId, so.OglasId}));
            mb.Entity<SlikeOglasa>()
                .HasOne(s => s.OglasObj)
                .WithMany(s => s.SlikeOglasa)
                .HasForeignKey(s => s.OglasId);
            mb.Entity<SlikeOglasa>()
                .HasOne(s => s.SlikaObj)
                .WithMany(s => s.SlikeOglasa)
                .HasForeignKey(s => s.SlikaId);
            
        }
    }
}
