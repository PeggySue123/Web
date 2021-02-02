import {IzgubljeneZivotinje} from "./IzgubljeneZivotinje.js"

export class IzgubljeneZivotinjeView
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
        var nazivCip = this.objekat.imaCip;
        var nazivLokacija = this.objekat.lokacijaGdeJeIzgubljen;
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
        var lokacija = document.createElement("p");
        lokacija.innerHTML = this.objekat.lokacija;
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
        
        podaci.appendChild(vrsta);
        podaci.appendChild(rasa);
        podaci.appendChild(starost);
        podaci.appendChild(cipovan);
        podaci.appendChild(lokacija);
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

                var forma = document.createElement("form");
                forma.className = "formica";

                var unesiVrstu = document.createElement("input");
                unesiVrstu.type = "text";
                unesiVrstu.placeholder = "Vrsta životinje";
                unesiVrstu.value = nazivVrsta;
                console.log(nazivVrsta);

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
                unesiCip.value = nazivCip;

                var unesiLokaciju = document.createElement("input");
                unesiLokaciju.type = "text";
                unesiLokaciju.placeholder = "Na kojoj lokaciji je izgubljen/a?";
                unesiLokaciju.value = nazivLokacija;

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

                
                prviDiv.appendChild(dodajOglasButton);
                drugiDiv.appendChild(vratiSe);
                forma.appendChild(prviDiv);
                forma.appendChild(drugiDiv);

                body.appendChild(forma);
                forma.appendChild(unesiVrstu);
                forma.appendChild(unesiRasu);
                forma.appendChild(unesiStarost);
                forma.appendChild(unesiCip);
                forma.appendChild(unesiLokaciju);
                forma.appendChild(unesiTekst);
                forma.appendChild(unesiIme);
                forma.appendChild(unesiKontakt);
                forma.appendChild(unesiTelefon);
                var data;
                data = {
                    vrsta: forma.children[0].value,
                    rasa: forma.children[1].value,
                    imeKontakta: forma.children[7].value,
                    telefonKontakta: forma.children[8].value,
                    tekstOglasa: forma.children[5].value,
                    imaCip: forma.children[3].value == "Čipovan",
                    starost: forma.children[2].value,
                    lokacijaGdeJeIzgubljen: forma.children[4].value,
                    imeZivotinje: forma.children[6].value
                }

                forma.addEventListener("submit",function(e){
                    e.preventDefault();
                    fetch("http://localhost:5000/api/IzgubljeneZivotinje" + "/" + podatak.id, {
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

                fetch("http://localhost:5000/api/IzgubljeneZivotinje/" + podatak.id, {
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

                fetch("http://localhost:5000/api/IzgubljeneZivotinje").then(p =>
                {
                    p.json().then(data => 
                        {
                            data.forEach(zivotinjeIzgubljene => {
                                const zivotinja = new IzgubljeneZivotinje(zivotinjeIzgubljene.id, zivotinjeIzgubljene.vrsta, zivotinjeIzgubljene.rasa, zivotinjeIzgubljene.starost, zivotinjeIzgubljene.imaCip, zivotinjeIzgubljene.lokacijaGdeJeIzgubljen, zivotinjeIzgubljene.imeZivotinje, zivotinjeIzgubljene.tekstOglasa, zivotinjeIzgubljene.telefonKontakta, zivotinjeIzgubljene.imeKontakta);
                                var z1 = new IzgubljeneZivotinjeView(celaStrana, zivotinja);
                                z1.IscrtajMaliOglas();
                            });
                        })
                });

                body.appendChild(celaStrana);
                

            })
        });
        
    }
}