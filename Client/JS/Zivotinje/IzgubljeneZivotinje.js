export class IzgubljeneZivotinje
{
    constructor(id, vrsta, rasa, starost, cip, lokacija, ime, tekstOglasa, kontaktTelefon, kontaktIme)
    {
        this.id = id;
        this.vrsta = vrsta;
        this.rasa = rasa;
        this.starost = starost;
        this.cip = cip;
        this.lokacija = lokacija;
        this.ime = ime;
        this.tekstOglasa = tekstOglasa;
        this.kontaktIme = kontaktIme;
        this.kontaktTelefon = kontaktTelefon;
        //this.slike = [];
        
        /*nekeSlike.forEach(slika => 
            {
                this.slike.push(slika.put);
            });*/
    }
}