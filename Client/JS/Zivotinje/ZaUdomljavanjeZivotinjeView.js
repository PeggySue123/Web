import {ZaUdomljavanjeZivotinje} from "./ZaUdomljavanjeZivotinje.js"

export class ZaUdomljavanjeZivotinjeView
{
    constructor(celaStrana, objekat)
    {
        this.celaStrana = celaStrana;
        this.objekat = objekat;
        this.body = document.getElementsByTagName("body")[0];
    }

    
    IscrtajMaliOglas() 
    {
        var nazivVrsta = this.objekat.vrsta;
        var nazivRasa = this.objekat.rasa;
        var nazivStarost = this.objekat.starost;
        var nazivCip = this.objekat.cip;
        var nazivSterilisan = this.objekat.sterilisan;
        var nazivUgovor = this.objekat.ugovor;
        var nazivPapiri = this.objekat.papiri;
        var nazivVakcinisan = this.objekat.vakcinisan;
        var nazivZivi = this.objekat.gdeDaZivi;
        var nazivTekst = this.objekat.tekstOglasa;
        var nazivIme = this.objekat.ime;
        var nazivImeK = this.objekat.kontaktIme;
        var nazivTel = this.objekat.kontaktTelefon;

        var podatak = document.createElement("div");
        podatak.className = "podatak";
        podatak.id = this.objekat.id;

        var podaci = document.createElement("div");
        podaci.className = "podaci";

        var vrsta = document.createElement("p");
        vrsta.innerHTML = this.objekat.vrsta;

        var rasa = document.createElement("p");
        rasa.innerHTML = this.objekat.rasa;

        var starost = document.createElement("p");
        starost.innerHTML = this.objekat.starost;

        var cipovan = document.createElement("p");

        var sterilisan = document.createElement("p");

        var ugovor = document.createElement("p");

        var papiri = document.createElement("p");

        var vakcinisan = document.createElement("p");

        var gdeDaZivi = document.createElement("p");
        gdeDaZivi.innerHTML = this.objekat.gdeDaZivi;

        var tekst = document.createElement("p");
        tekst.innerHTML = this.objekat.tekstOglasa;

        var imeLjubimca = document.createElement("p");
        imeLjubimca.innerHTML = this.objekat.ime;

        var imeKontakta = document.createElement("p");
        imeKontakta.innerHTML = this.objekat.kontaktIme;

        var telefon = document.createElement("p");
        telefon.innerHTML = this.objekat.kontaktTelefon;

        if(this.objekat.cip == "1"){
            cipovan.innerHTML = "Čipovan";
        }
        else{
            cipovan.innerHTML = "Nije čipovan";
        }
        
        if(this.objekat.sterilisan == "1"){
            sterilisan.innerHTML = "Sterilisan";
        }
        else{
            sterilisan.innerHTML = "Nije sterilisan";
        }

        if(this.objekat.ugovor == "1"){
            ugovor.innerHTML = "Potreban ugovor o udomljavanju";
        }
        else{
            ugovor.innerHTML = "Nije potreban ugovor o udomljavanju";
        }

        if(this.objekat.papiri == "1"){
            papiri.innerHTML = "Ima papire";
        }
        else{
            papiri.innerHTML = "Nema papire";
        }

        if(this.objekat.vakcinisan == "1"){
            vakcinisan.innerHTML = "Vakcinisan";
        }
        else{
            vakcinisan.innerHTML = "Nije vakcinisan";
        }

        podaci.appendChild(vrsta);
        podaci.appendChild(rasa);
        podaci.appendChild(starost);
        podaci.appendChild(cipovan);
        podaci.appendChild(sterilisan);
        podaci.appendChild(ugovor);
        podaci.appendChild(papiri);
        podaci.appendChild(vakcinisan);
        podaci.appendChild(gdeDaZivi);
        podaci.appendChild(tekst);
        podaci.appendChild(imeLjubimca);
        podaci.appendChild(imeKontakta);
        podaci.appendChild(telefon);
        podatak.appendChild(podaci);
        this.celaStrana.appendChild(podatak);

        podatak.addEventListener("click", function()
        {
            const body = document.getElementsByTagName("body")[0];
            while(body.children.length > 0)
                body.removeChild(body.children[0]);
            var maliDiv = document.createElement("div");
            maliDiv.className = "maliDiv";
            var dugmeZaBrisanje = document.createElement("button");
            dugmeZaBrisanje.className = "dugm";
            dugmeZaBrisanje.innerHTML = "Obriši oglas";
            var dugmeZaEdit = document.createElement("button");
            dugmeZaEdit.className = "dugm";
            dugmeZaEdit.innerHTML = "Izmeni oglas";
            maliDiv.appendChild(dugmeZaBrisanje);
            maliDiv.appendChild(dugmeZaEdit);
            body.appendChild(maliDiv);

            dugmeZaEdit.addEventListener("click", function()
            {
                const body = document.getElementsByTagName("body")[0];
                while(body.children.length > 0)
                    body.removeChild(body.children[0]);

                var strana = document.createElement("div");
                strana.className = "stranica";    
                
                var forma = document.createElement("form");
                forma.className = "formica";

                var unesiVrstu = document.createElement("input");
                unesiVrstu.type = "text";
                unesiVrstu.placeholder = "Vrsta životinje";
                unesiVrstu.value = nazivVrsta;

                var unesiRasu = document.createElement("input");
                unesiRasu.type = "text";
                unesiRasu.placeholder = "Unesite rasu!";
                unesiRasu.value = nazivRasa;

                var unesiStarost = document.createElement("input");
                unesiStarost.type = "text";
                unesiStarost.placeholder = "Starost Vaše životinje";
                unesiStarost.value = nazivStarost;

                var unesiCip = document.createElement("select");
                var unesiCipOption1 = document.createElement("option");
                unesiCipOption1.value = "Čipovan";
                unesiCipOption1.innerHTML = "Čipovan";
                unesiCip.appendChild(unesiCipOption1);
                var unesiCipOption2 = document.createElement("option");
                unesiCipOption2.value = "Nije čipovan";
                unesiCipOption2.innerHTML = "Nije čipovan";
                unesiCip.appendChild(unesiCipOption2);
                unesiCip.value = (nazivCip)? "Čipovan" : "Nije čipovan";

                var unesiSterilisan = document.createElement("select");
                var unesiSterilisanOption1 = document.createElement("option");
                unesiSterilisanOption1.value = "Sterilisan";
                unesiSterilisanOption1.innerHTML = "Sterilisan";
                unesiSterilisan.appendChild(unesiSterilisanOption1);
                var unesiSterilisanOption2 = document.createElement("option");
                unesiSterilisanOption2.value = "Nije sterilisan";
                unesiSterilisanOption2.innerHTML = "Nije sterilisan";
                unesiSterilisan.appendChild(unesiSterilisanOption2);
                unesiSterilisan.value = (nazivSterilisan)? "Sterilisan" : "Nije sterilisan";

                var unesiUgovor = document.createElement("select");
                var unesiUgovorOption1 = document.createElement("option");
                unesiUgovorOption1.value = "Potreban ugovor o udomljavanju";
                unesiUgovorOption1.innerHTML = "Potreban ugovor o udomljavanju";
                unesiUgovor.appendChild(unesiUgovorOption1);
                var unesiUgovorOption2 = document.createElement("option");
                unesiUgovorOption2.value = "Nije potreban ugovor o udomljavanju";
                unesiUgovorOption2.innerHTML = "Nije potreban ugovor o udomljavanju";
                unesiUgovor.appendChild(unesiUgovorOption2);
                unesiUgovor.value = (nazivUgovor)? "Potreban ugovor o udomljavanju" : "Nije potreban ugovor o udomljavanju";

                var unesiPapiri = document.createElement("select");
                var unesiPapiriOption1 = document.createElement("option");
                unesiPapiriOption1.value = "Ima papire";
                unesiPapiriOption1.innerHTML = "Ima papire";
                unesiPapiri.appendChild(unesiPapiriOption1);
                var unesiPapiriOption2 = document.createElement("option");
                unesiPapiriOption2.value = "Nema papire";
                unesiPapiriOption2.innerHTML = "Nema papire";
                unesiPapiri.appendChild(unesiPapiriOption2);
                unesiPapiri.value = (nazivPapiri)? "Ima papire" : "Nema papire";

                var unesiVakcinisan = document.createElement("select");
                var unesiVakcinisanOption1 = document.createElement("option");
                unesiVakcinisanOption1.value = "Vakcinisan";
                unesiVakcinisanOption1.innerHTML = "Vakcinisan";
                unesiVakcinisan.appendChild(unesiVakcinisanOption1);
                var unesiVakcinisanOption2 = document.createElement("option");
                unesiVakcinisanOption2.value = "Nije vakcinisan";
                unesiVakcinisanOption2.innerHTML = "Nije vakcinisan";
                unesiVakcinisan.appendChild(unesiVakcinisanOption2);
                unesiVakcinisan.value = (nazivVakcinisan)? "Vakcinisan" : "Nije vakcinisan";

                var unesiGdeDaZivi = document.createElement("input");
                unesiGdeDaZivi.type = "text";
                unesiGdeDaZivi.placeholder = "Da li se zahteva određeno mesto za život životinje?";
                unesiGdeDaZivi.value = nazivZivi;

                var unesiIme = document.createElement("input");
                unesiIme.type = "text";
                unesiIme.placeholder = "Ime Vašeg ljubimca";
                unesiIme.value = nazivIme;

                var unesiTekst = document.createElement("input");
                unesiTekst.type = "text";
                unesiTekst.placeholder = "Tekst oglasa";
                unesiTekst.value = nazivTekst;

                var unesiKontakt = document.createElement("input");
                unesiKontakt.type = "text";
                unesiKontakt.placeholder = "Vaše ime";
                unesiKontakt.value = nazivImeK;

                var unesiTelefon = document.createElement("input");
                unesiTelefon.type = "text";
                unesiTelefon.placeholder = "Vaš kontakt telefon";
                unesiTelefon.value = nazivTel;
                
                const prviDiv = document.createElement("div");
                prviDiv.className = "divovi";
                const drugiDiv = document.createElement("div");
                drugiDiv.className = "divovi";

                var vratiSe = document.createElement("button");
                vratiSe.className = "dugme";
                vratiSe.innerHTML = "Vrati se na početnu!";
                vratiSe.addEventListener("click", function(){
                    location.reload();
                })


                var dodajOglasButton = document.createElement("button");
                dodajOglasButton.innerHTML = "Dodaj oglas";
                dodajOglasButton.className = "dugme";
                dodajOglasButton.id = "dodaj";
                
                prviDiv.appendChild(dodajOglasButton);
                drugiDiv.appendChild(vratiSe);
                

                strana.appendChild(forma);
                forma.appendChild(unesiVrstu);
                forma.appendChild(unesiRasu);
                forma.appendChild(unesiStarost);
                forma.appendChild(unesiCip);
                forma.appendChild(unesiSterilisan);
                forma.appendChild(unesiUgovor);
                forma.appendChild(unesiPapiri);
                forma.appendChild(unesiVakcinisan);
                forma.appendChild(unesiGdeDaZivi);
                forma.appendChild(unesiIme);
                forma.appendChild(unesiTekst);
                forma.appendChild(unesiKontakt);
                forma.appendChild(unesiTelefon);
                forma.appendChild(prviDiv);
                strana.appendChild(drugiDiv);
                body.appendChild(strana);
                

                forma.addEventListener("submit",function(e){
                    e.preventDefault();
                    var data;
                    data = {
                        vrsta: forma.children[0].value,
                        rasa: forma.children[1].value,
                        starost: forma.children[2].value,
                        imaCip: forma.children[3].value == "Čipovan",
                        sterilisan: forma.children[4].value == "Sterilisan",
                        ugovor: forma.children[5].value == "Potreban ugovor o udomljavanju",
                        papiri: forma.children[6].value == "Ima papire",
                        vakcinisan: forma.children[7].value == "Vakcinisan",
                        gdeDaZivi: forma.children[8].value,
                        imeZivotinje: forma.children[9].value,
                        tekstOglasa: forma.children[10].value,
                        imeKontakta: forma.children[11].value,
                        telefonKontakta: forma.children[12].value
                    }
                    fetch("http://localhost:5000/api/UdomljeneZivotinje/" + podatak.id, {
                    method: "PUT",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify(
                        data
                    )
                    }).then(s => {
                        if(s.ok){
                            console.log("Proslo");
                        }
                        else{
                            console.log(s);
                        }
                    });
                        return false;
                    });
                    
                })

            dugmeZaBrisanje.addEventListener("click", function(){

                fetch("http://localhost:5000/api/UdomljeneZivotinje/" + podatak.id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type" : "application/json"
                    }
                }).then(s => {
                    if(s.ok){
                        console.log("Proslo");
                    }
                    else{
                        console.log(s);
                    }
                });


                while(body.children.length > 0)
                    body.removeChild(body.children[0]);
                var celaStrana = document.createElement("div");
                celaStrana.className = "strana";

                fetch("http://localhost:5000/api/UdomljeneZivotinje").then(p =>
                {
                    p.json().then(data => 
                        {
                            data.forEach(zivotinjeZaUdomljavanje => {
                                const zivotinja = new ZaUdomljavanjeZivotinje(zivotinjeZaUdomljavanje.id, zivotinjeZaUdomljavanje.vrsta, zivotinjeZaUdomljavanje.rasa, zivotinjeZaUdomljavanje.imeZivotinje, zivotinjeZaUdomljavanje.starost, zivotinjeZaUdomljavanje.imaCip, zivotinjeZaUdomljavanje.sterilisan, zivotinjeZaUdomljavanje.obavezanUgovor, zivotinjeZaUdomljavanje.jelImaPapire, zivotinjeZaUdomljavanje.jelVakcinisan, zivotinjeZaUdomljavanje.gdeSeZahtevaDaZivi, zivotinjeZaUdomljavanje.tekstOglasa, zivotinjeZaUdomljavanje.telefonKontakta, zivotinjeZaUdomljavanje.imeKontakta);
                                var z1 = new ZaUdomljavanjeZivotinjeView(celaStrana, zivotinja);
                                z1.IscrtajMaliOglas();
                            });
                        })
                });

                body.appendChild(celaStrana);
                

            })
        });
        
    }
}