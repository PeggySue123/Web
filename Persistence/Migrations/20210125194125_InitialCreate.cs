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
                name: "SlikeIzgubljen",
                columns: table => new
                {
                    OglasId = table.Column<Guid>(type: "TEXT", nullable: false),
                    SlikaId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SlikeIzgubljen", x => new { x.SlikaId, x.OglasId });
                    table.ForeignKey(
                        name: "FK_SlikeIzgubljen_IzgubljeneZivotinje_OglasId",
                        column: x => x.OglasId,
                        principalTable: "IzgubljeneZivotinje",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SlikeIzgubljen_SlikeZivotinja_SlikaId",
                        column: x => x.SlikaId,
                        principalTable: "SlikeZivotinja",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SlikeNadjen",
                columns: table => new
                {
                    OglasId = table.Column<Guid>(type: "TEXT", nullable: false),
                    SlikaId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SlikeNadjen", x => new { x.SlikaId, x.OglasId });
                    table.ForeignKey(
                        name: "FK_SlikeNadjen_NadjeneZivotinje_OglasId",
                        column: x => x.OglasId,
                        principalTable: "NadjeneZivotinje",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SlikeNadjen_SlikeZivotinja_SlikaId",
                        column: x => x.SlikaId,
                        principalTable: "SlikeZivotinja",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SlikeUdomljen",
                columns: table => new
                {
                    OglasId = table.Column<Guid>(type: "TEXT", nullable: false),
                    SlikaId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SlikeUdomljen", x => new { x.SlikaId, x.OglasId });
                    table.ForeignKey(
                        name: "FK_SlikeUdomljen_SlikeZivotinja_SlikaId",
                        column: x => x.SlikaId,
                        principalTable: "SlikeZivotinja",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SlikeUdomljen_UdomljeneZivotinje_OglasId",
                        column: x => x.OglasId,
                        principalTable: "UdomljeneZivotinje",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SlikeIzgubljen_OglasId",
                table: "SlikeIzgubljen",
                column: "OglasId");

            migrationBuilder.CreateIndex(
                name: "IX_SlikeNadjen_OglasId",
                table: "SlikeNadjen",
                column: "OglasId");

            migrationBuilder.CreateIndex(
                name: "IX_SlikeUdomljen_OglasId",
                table: "SlikeUdomljen",
                column: "OglasId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SlikeIzgubljen");

            migrationBuilder.DropTable(
                name: "SlikeNadjen");

            migrationBuilder.DropTable(
                name: "SlikeUdomljen");

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
