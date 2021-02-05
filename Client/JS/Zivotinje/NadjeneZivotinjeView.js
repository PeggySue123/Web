import {NadjeneZivotinje} from "./NadjeneZivotinje.js"

export class NadjeneZivotinjeView
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
        var nazivCip = this.objekat.proverenCip;
        var nazivSklonjen = this.objekat.sklonjen;
        var nazivTekst = this.objekat.tekst;
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

        var cipovan = document.createElement("p");

        var sklonjen = document.createElement("p");
        sklonjen.innerHTML = this.objekat.sklonjen;

        var tekst = document.createElement("p");
        tekst.innerHTML = this.objekat.tekst;

        var imeKontakta = document.createElement("p");
        imeKontakta.innerHTML = this.objekat.kontaktIme;

        var telefon = document.createElement("p");
        telefon.innerHTML = this.objekat.kontaktTelefon;

        if(this.objekat.proverenCip == "1"){
            cipovan.innerHTML = "Proveren čip";
        }
        else{
            cipovan.innerHTML = "Nije proveren čip";
        }
        
        podaci.appendChild(vrsta);
        podaci.appendChild(rasa);
        podaci.appendChild(cipovan);
        podaci.appendChild(sklonjen);
        podaci.appendChild(tekst);
        podaci.appendChild(imeKontakta);
        podaci.appendChild(telefon);
        podatak.appendChild(podaci);
        this.celaStrana.appendChild(podatak);
        console.log(nazivSklonjen);
        console.log(nazivImeK);
        console.log(nazivTel);

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

                var unesiCip = document.createElement("select");
                var unesiCipOption1 = document.createElement("option");
                unesiCipOption1.value = "Proveren čip";
                unesiCipOption1.innerHTML = "Proveren čip";
                unesiCip.appendChild(unesiCipOption1);
                var unesiCipOption2 = document.createElement("option");
                unesiCipOption2.value = "Nije proveren čip";
                unesiCipOption2.innerHTML = "Nije proveren čip";
                unesiCip.appendChild(unesiCipOption2);
                unesiCip.value = (nazivCip)? "Proveren čip" : "Nije proveren čip";

                var unesiSklonjen = document.createElement("input");
                unesiSklonjen.type = "text";
                unesiSklonjen.placeholder = "Da li je životinja sklonjena?";
                unesiSklonjen.value = nazivSklonjen;

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
                

                console.log(forma);
                forma.appendChild(unesiVrstu);
                forma.appendChild(unesiRasu);
                forma.appendChild(unesiCip);
                forma.appendChild(unesiSklonjen);
                forma.appendChild(unesiTekst);
                forma.appendChild(unesiKontakt);
                forma.appendChild(unesiTelefon);
                forma.appendChild(prviDiv);
                strana.appendChild(forma);
                strana.appendChild(drugiDiv);
                body.appendChild(strana);
                

                forma.addEventListener("submit",function(e){
                    e.preventDefault();
                    var data;
                    data = {
                        vrsta: forma.children[0].value,
                        rasa: forma.children[1].value,
                        imeKontakta: forma.children[5].value,
                        telefonKontakta: forma.children[6].value,
                        tekstOglasa: forma.children[4].value,
                        proverenCip: forma.children[2].value == "Proveren čip",
                        jelSklonjen: forma.children[3].value
                    }
                    fetch("http://localhost:5000/api/NadjeneZivotinje" + "/" + podatak.id, {
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

                    fetch("http://localhost:5000/api/NadjeneZivotinje/" + podatak.id, {
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

                    fetch("http://localhost:5000/api/NadjeneZivotinje").then(p =>
                    {
                        p.json().then(data => 
                            {
                                data.forEach(zivotinjeNadjene => {
                                    const zivotinja = new NadjeneZivotinje(zivotinjeNadjene.id, zivotinjeNadjene.vrsta, zivotinjeNadjene.rasa, zivotinjeNadjene.proverenCip, zivotinjeNadjene.jelSklonjen, zivotinjeNadjene.tekstOglasa, zivotinjeNadjene.imeKontakta, zivotinjeNadjene.telefonKontakta);
                                    var z1 = new NadjeneZivotinjeView(celaStrana, zivotinja);
                                    z1.IscrtajMaliOglas();
                                });
                            })
                    });

                    body.appendChild(celaStrana);
                })
            });
        
        }
    }