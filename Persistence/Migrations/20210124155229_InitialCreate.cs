using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "IzgubljeneZivotinje",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Starost = table.Column<string>(type: "TEXT", nullable: true),
                    LokacijaGdeJeIzgubljen = table.Column<string>(type: "TEXT", nullable: true),
                    ImeZivotinje = table.Column<string>(type: "TEXT", nullable: true),
                    Vrsta = table.Column<string>(type: "TEXT", nullable: true),
                    Rasa = table.Column<string>(type: "TEXT", nullable: true),
                    ImeKontakta = table.Column<string>(type: "TEXT", nullable: true),
                    TelefonKontakta = table.Column<string>(type: "TEXT", nullable: true),
                    TekstOglasa = table.Column<string>(type: "TEXT", nullable: true),
                    ImaCip = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IzgubljeneZivotinje", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "NadjeneZivotinje",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    JelSklonjen = table.Column<string>(type: "TEXT", nullable: true),
                    ProverenCip = table.Column<bool>(type: "INTEGER", nullable: false),
                    Vrsta = table.Column<string>(type: "TEXT", nullable: true),
                    Rasa = table.Column<string>(type: "TEXT", nullable: true),
                    ImeKontakta = table.Column<string>(type: "TEXT", nullable: true),
                    TelefonKontakta = table.Column<string>(type: "TEXT", nullable: true),
                    TekstOglasa = table.Column<string>(type: "TEXT", nullable: true),
                    ImaCip = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NadjeneZivotinje", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SlikeZivotinja",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Put = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SlikeZivotinja", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UdomljeneZivotinje",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    ImeZivotinje = table.Column<string>(type: "TEXT", nullable: true),
                    Starost = table.Column<string>(type: "TEXT", nullable: true),
                    Sterilisan = table.Column<bool>(type: "INTEGER", nullable: false),
                    ObavezanUgovor = table.Column<bool>(type: "INTEGER", nullable: false),
                    JelImaPapire = table.Column<bool>(type: "INTEGER", nullable: false),
                    JelVakcinisan = table.Column<bool>(type: "INTEGER", nullable: false),
                    GdeSeZahtevaDaZivi = table.Column<string>(type: "TEXT", nullable: true),
                    Vrsta = table.Column<string>(type: "TEXT", nullable: true),
                    Rasa = table.Column<string>(type: "TEXT", nullable: true),
                    ImeKontakta = table.Column<string>(type: "TEXT", nullable: true),
                    TelefonKontakta = table.Column<string>(type: "TEXT", nullable: true),
                    TekstOglasa = table.Column<string>(type: "TEXT", nullable: true),
                    ImaCip = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UdomljeneZivotinje", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SveSlike",
                columns: table => new
                {
                    OglasId = table.Column<Guid>(type: "TEXT", nullable: false),
                    SlikaId = table.Column<Guid>(type: "TEXT", nullable: false),
                    NadjenoId = table.Column<Guid>(type: "TEXT", nullable: true),
                    UdomljavanjeId = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SveSlike", x => new { x.SlikaId, x.OglasId });
                    table.ForeignKey(
                        name: "FK_SveSlike_IzgubljeneZivotinje_OglasId",
                        column: x => x.OglasId,
                        principalTable: "IzgubljeneZivotinje",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SveSlike_NadjeneZivotinje_NadjenoId",
                        column: x => x.NadjenoId,
                        principalTable: "NadjeneZivotinje",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SveSlike_SlikeZivotinja_SlikaId",
                        column: x => x.SlikaId,
                        principalTable: "SlikeZivotinja",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SveSlike_UdomljeneZivotinje_UdomljavanjeId",
                        column: x => x.UdomljavanjeId,
                        principalTable: "UdomljeneZivotinje",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SveSlike_NadjenoId",
                table: "SveSlike",
                column: "NadjenoId");

            migrationBuilder.CreateIndex(
                name: "IX_SveSlike_OglasId",
                table: "SveSlike",
                column: "OglasId");

            migrationBuilder.CreateIndex(
                name: "IX_SveSlike_UdomljavanjeId",
                table: "SveSlike",
                column: "UdomljavanjeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SveSlike");

            migrationBuilder.DropTable(
                name: "IzgubljeneZivotinje");

            migrationBuilder.DropTable(
                name: "NadjeneZivotinje");

            migrationBuilder.DropTable(
                name: "SlikeZivotinja");

            migrationBuilder.DropTable(
                name: "UdomljeneZivotinje");
        }
    }
}
