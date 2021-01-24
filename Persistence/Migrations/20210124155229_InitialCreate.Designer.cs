﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20210124155229_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("Domain.Izgubljeno", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<bool>("ImaCip")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ImeKontakta")
                        .HasColumnType("TEXT");

                    b.Property<string>("ImeZivotinje")
                        .HasColumnType("TEXT");

                    b.Property<string>("LokacijaGdeJeIzgubljen")
                        .HasColumnType("TEXT");

                    b.Property<string>("Rasa")
                        .HasColumnType("TEXT");

                    b.Property<string>("Starost")
                        .HasColumnType("TEXT");

                    b.Property<string>("TekstOglasa")
                        .HasColumnType("TEXT");

                    b.Property<string>("TelefonKontakta")
                        .HasColumnType("TEXT");

                    b.Property<string>("Vrsta")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("IzgubljeneZivotinje");
                });

            modelBuilder.Entity("Domain.Nadjeno", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<bool>("ImaCip")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ImeKontakta")
                        .HasColumnType("TEXT");

                    b.Property<string>("JelSklonjen")
                        .HasColumnType("TEXT");

                    b.Property<bool>("ProverenCip")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Rasa")
                        .HasColumnType("TEXT");

                    b.Property<string>("TekstOglasa")
                        .HasColumnType("TEXT");

                    b.Property<string>("TelefonKontakta")
                        .HasColumnType("TEXT");

                    b.Property<string>("Vrsta")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("NadjeneZivotinje");
                });

            modelBuilder.Entity("Domain.Slika", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Put")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("SlikeZivotinja");
                });

            modelBuilder.Entity("Domain.SlikeOglasa", b =>
                {
                    b.Property<Guid>("SlikaId")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("OglasId")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("NadjenoId")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("UdomljavanjeId")
                        .HasColumnType("TEXT");

                    b.HasKey("SlikaId", "OglasId");

                    b.HasIndex("NadjenoId");

                    b.HasIndex("OglasId");

                    b.HasIndex("UdomljavanjeId");

                    b.ToTable("SveSlike");
                });

            modelBuilder.Entity("Domain.Udomljavanje", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("GdeSeZahtevaDaZivi")
                        .HasColumnType("TEXT");

                    b.Property<bool>("ImaCip")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ImeKontakta")
                        .HasColumnType("TEXT");

                    b.Property<string>("ImeZivotinje")
                        .HasColumnType("TEXT");

                    b.Property<bool>("JelImaPapire")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("JelVakcinisan")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("ObavezanUgovor")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Rasa")
                        .HasColumnType("TEXT");

                    b.Property<string>("Starost")
                        .HasColumnType("TEXT");

                    b.Property<bool>("Sterilisan")
                        .HasColumnType("INTEGER");

                    b.Property<string>("TekstOglasa")
                        .HasColumnType("TEXT");

                    b.Property<string>("TelefonKontakta")
                        .HasColumnType("TEXT");

                    b.Property<string>("Vrsta")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("UdomljeneZivotinje");
                });

            modelBuilder.Entity("Domain.SlikeOglasa", b =>
                {
                    b.HasOne("Domain.Nadjeno", null)
                        .WithMany("SlikeOglasa")
                        .HasForeignKey("NadjenoId");

                    b.HasOne("Domain.Izgubljeno", "OglasObj")
                        .WithMany("SlikeOglasa")
                        .HasForeignKey("OglasId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Slika", "SlikaObj")
                        .WithMany("SlikeOglasa")
                        .HasForeignKey("SlikaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Udomljavanje", null)
                        .WithMany("SlikeOglasa")
                        .HasForeignKey("UdomljavanjeId");

                    b.Navigation("OglasObj");

                    b.Navigation("SlikaObj");
                });

            modelBuilder.Entity("Domain.Izgubljeno", b =>
                {
                    b.Navigation("SlikeOglasa");
                });

            modelBuilder.Entity("Domain.Nadjeno", b =>
                {
                    b.Navigation("SlikeOglasa");
                });

            modelBuilder.Entity("Domain.Slika", b =>
                {
                    b.Navigation("SlikeOglasa");
                });

            modelBuilder.Entity("Domain.Udomljavanje", b =>
                {
                    b.Navigation("SlikeOglasa");
                });
#pragma warning restore 612, 618
        }
    }
}
