using System;
using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Izgubljeno> IzgubljeneZivotinje{get; set;}
        public DbSet<Nadjeno> NadjeneZivotinje{get; set;}
        public DbSet<Slika> SlikeZivotinja{get; set;}
        public DbSet<Udomljavanje> UdomljeneZivotinje{get; set;}
        public DbSet<SlikeIzgubljen> SlikeIzgubljen{get; set;}
        public DbSet<SlikeNadjen> SlikeNadjen{get; set;}
        public DbSet<SlikeUdomljen> SlikeUdomljen{get; set;}
        protected override void OnModelCreating(ModelBuilder mb)
        {
            base.OnModelCreating(mb);
            mb.Entity<SlikeIzgubljen>(x => x.HasKey(so => new {so.SlikaId, so.OglasId}));
            mb.Entity<SlikeIzgubljen>()
                .HasOne(s => s.IzgubljenObj)
                .WithMany(s => s.SlikeIzgubljen)
                .HasForeignKey(s => s.OglasId);
            mb.Entity<SlikeIzgubljen>()
                .HasOne(s => s.SlikaObj)
                .WithMany(s => s.SlikeIzgubljen)
                .HasForeignKey(s => s.SlikaId);
            mb.Entity<SlikeNadjen>(x => x.HasKey(so => new {so.SlikaId, so.OglasId}));
            mb.Entity<SlikeNadjen>()
                .HasOne(s => s.NadjenObj)
                .WithMany(s => s.SlikeNadjen)
                .HasForeignKey(s => s.OglasId);
            mb.Entity<SlikeNadjen>()
                .HasOne(s => s.SlikaObj)
                .WithMany(s => s.SlikeNadjen)
                .HasForeignKey(s => s.SlikaId);
            mb.Entity<SlikeUdomljen>(x => x.HasKey(so => new {so.SlikaId, so.OglasId}));
            mb.Entity<SlikeUdomljen>()
                .HasOne(s => s.UdomljenObj)
                .WithMany(s => s.SlikeUdomljen)
                .HasForeignKey(s => s.OglasId);
            mb.Entity<SlikeUdomljen>()
                .HasOne(s => s.SlikaObj)
                .WithMany(s => s.SlikeUdomljen)
                .HasForeignKey(s => s.SlikaId);
        }
    }
}
