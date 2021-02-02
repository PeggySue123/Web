export class NadjeneZivotinje
{
    constructor(id, vrsta, rasa, proverenCip, jelImaCip, sklonjen, tekst, kontaktTelefon, kontaktIme, nekeSlike)
    {
        this.id = id;
        this.vrsta = vrsta;
        this.rasa = rasa;
        this.proverenCip = proverenCip;
        this.jelImaCip = jelImaCip;
        this.sklonjen = sklonjen;
        this.tekst = tekst;
        this.kontaktIme = kontaktIme;
        this.kontaktTelefon = kontaktTelefon;
        this.slike = [];
        nekeSlike.forEach(slika => 
            {
                this.slike.push(slika.put);
            });
    }
}