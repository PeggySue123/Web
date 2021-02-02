export class ZaUdomljavanjeZivotinje
{
    constructor(id, vrsta, rasa, ime, starost, cip, sterilisan, ugovor, papiri, vakcinisan, gdeDaZivi, tekst, kontaktTelefon, kontaktIme, nekeSlike)
    {
        this.id = id;
        this.rasa = rasa;
        this.vrsta = vrsta;
        this.ime = ime;
        this.starost= starost;
        this.cip = cip;
        this.sterilisan = sterilisan;
        this.ugovor = ugovor;
        this.papiri = papiri;
        this.vakcinisan = vakcinisan;
        this.gdeDaZivi = gdeDaZivi;
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