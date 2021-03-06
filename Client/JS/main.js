import {IzgubljeneZivotinje} from "./Zivotinje/IzgubljeneZivotinje.js";
import {IzgubljeneZivotinjeView} from "./Zivotinje/IzgubljeneZivotinjeView.js";
import { NadjeneZivotinje } from "./Zivotinje/NadjeneZivotinje.js";
import { ZaUdomljavanjeZivotinje } from "./Zivotinje/ZaUdomljavanjeZivotinje.js";
import {NadjeneZivotinjeView} from "./Zivotinje/NadjeneZivotinjeView.js";
import {ZaUdomljavanjeZivotinjeView} from "./Zivotinje/ZaUdomljavanjeZivotinjeView.js";

const html = document.getElementsByTagName("html")[0];
const body = document.getElementsByTagName("body")[0];

const container = document.createElement("div");
body.appendChild(container);
const tekst = document.createElement("div");
const dugme = document.createElement("div");
tekst.className = "tekstNaPocetnoj";
const prviTekst = document.createElement("p");
prviTekst.innerHTML = "Dobrodošli!"
prviTekst.className = "tekstici";
tekst.appendChild(prviTekst);
const drugiTekst = document.createElement("p");
drugiTekst.innerHTML = "Dodajte oglas za životinju koju ste izgubili!"
drugiTekst.className = "tekstici";
tekst.appendChild(drugiTekst);

const tekstNaDnu = document.createElement("p");
tekstNaDnu.className = "tekstici";
tekstNaDnu.innerHTML = "Pogledajte oglase izgubljenih životinja";
const tekstNaDnuDiv = document.createElement("div");
tekstNaDnuDiv.className = "tekstNaDnu";
const izmedju = document.createElement("div");
izmedju.className = "tekstic1";
tekstNaDnuDiv.appendChild(izmedju);
tekstNaDnuDiv.appendChild(tekstNaDnu);

var dugmeZaDodavanje = document.createElement("button");
dugmeZaDodavanje.innerHTML = "Dodaj oglas";
var dugmeZaIzgubljene = document.createElement("button");
dugmeZaIzgubljene.innerHTML = "Izgubljene životinje";
var dugmeZaNadjene = document.createElement("button");
dugmeZaNadjene.innerHTML = "Nađene životinje";
var dugmeZaUdomljene = document.createElement("button");
dugmeZaUdomljene.innerHTML = "Traže dom";

function DodajDugme()
{
    
    container.appendChild(tekst);
    container.appendChild(dugmeZaDodavanje);
    container.appendChild(tekstNaDnuDiv);    
    container.appendChild(dugmeZaIzgubljene);    
    container.appendChild(dugmeZaNadjene);    
    container.appendChild(dugmeZaUdomljene);

    dugmeZaDodavanje.className = "dugme";
    dugmeZaIzgubljene.className = "dugme";
    dugmeZaNadjene.className = "dugme";
    dugmeZaUdomljene.className = "dugme";

    dugmeZaDodavanje.addEventListener("click", function(){
        PitajZaFormu();
        //NacrtajFormuIzgubljene();
    });

    dugmeZaIzgubljene.addEventListener("click", function(){
        NacrtajListuIzgubljene();
    });

    dugmeZaUdomljene.addEventListener("click", function(){
        NacrtajListuUdomljene();
    });
    dugmeZaNadjene.addEventListener("click", function(){
        NacrtajListuNadjene();
    });
}

function PitajZaFormu()
{
    obrisiSve();
    var pitaj = document.createElement("div");
    pitaj.className = "pitaj";
    var izgubljene = document.createElement("button");
    var nadjene = document.createElement("button");
    var udomljene = document.createElement("button");
    var vratiSe = document.createElement("button");
    pitaj.appendChild(izgubljene);
    izgubljene.innerHTML = "Dodaj izgubljenu životinju!";
    izgubljene.className = "dugmici";
    pitaj.appendChild(nadjene);
    nadjene.innerHTML = "Dodaj nađenu životinju!";
    nadjene.className = "dugmici";
    pitaj.appendChild(udomljene);
    udomljene.innerHTML = "Dodaj životinju za udomljavanje!";
    udomljene.className = "dugmici";
    pitaj.appendChild(vratiSe);
    vratiSe.innerHTML = "Vrati se na početnu!";
    vratiSe.className = "dugmici";
    vratiSe.addEventListener("click", function(){
        location.reload();
    })
    body.appendChild(pitaj);
    izgubljene.addEventListener("click", function(){
        NacrtajFormuIzgubljene();
    });
    nadjene.addEventListener("click", function()
    {
        NacrtajFormuNadjene();
    });
    udomljene.addEventListener("click", function()
    {
        NacrtajFormuUdomljene();
    });
}


function dodajOglasIzgubljene(forma){
    forma.children[forma.children.length-1].style.visibility = "hidden";
    var data;
    data = {
        vrsta: forma.children[0].value,
        rasa: forma.children[1].value,
        imekontakta: forma.children[7].value,
        telefonkontakta: forma.children[8].value,
        tekstoglasa: forma.children[5].value,
        imacip: forma.children[3].value == "Čipovan",
        starost: forma.children[2].value,
        lokacijagdejeizgubljen: forma.children[4].value,
        imezivotinje: forma.children[6].value
    }

    fetch("http://localhost:5000/api/IzgubljeneZivotinje", {
            method: "POST",
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
}

function dodajOglasNadjene(forma){
    forma.children[forma.children.length-1].style.visibility = "hidden";
    var data;

    data = {
        vrsta: forma.children[0].value,
        rasa: forma.children[1].value,
        imekontakta: forma.children[5].value,
        telefonkontakta: forma.children[6].value,
        tekstoglasa: forma.children[4].value,
        proverencip: forma.children[2].value == "Proveren čip",
        jelsklonjen: forma.children[3].value
    }

    fetch("http://localhost:5000/api/NadjeneZivotinje", {
            method: "POST",
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
    }

function dodajOglasUdomljene(forma){
    forma.children[forma.children.length-1].style.visibility = "hidden";
    var data;
    data = {
        vrsta: forma.children[0].value,
        rasa: forma.children[1].value,
        imekontakta: forma.children[11].value,
        telefonkontakta: forma.children[12].value,
        tekstoglasa: forma.children[10].value,
        imacip: forma.children[3].value == "Čipovan",
        starost: forma.children[2].value,
        imeZivotinje: forma.children[9].value,
        gdeSeZahtevaDaZivi: forma.children[8].value,
        sterilisan: forma.children[4].value == "Sterilisan",
        obavezanUgovor: forma.children[5].value == "Potreban ugovor o udomljavanju",
        jelImaPapire: forma.children[6].value == "Ima papire",
        jelVakcinisan: forma.children[7].value == "Vakcinisan"
    }

    fetch("http://localhost:5000/api/UdomljeneZivotinje", {
            method: "POST",
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
}

function validirajPodatkeIzgubljene(forma){
    var empty = 0;
    var i = 0;
    while(i < forma.children.length-3 && empty == 0){
        if(forma.children[i++].value == "")
            empty++;
    }
    if(empty == 0){
        dodajOglasIzgubljene(forma);
    }else{
        forma.children[forma.children.length-1].style.visibility = "visible";
    }
}

function validirajPodatkeNadjene(forma){
    var empty = 0;
    var i = 0;
    while(i < forma.children.length-3 && empty == 0){
        if(forma.children[i++].value == "")
            empty++;
    }
    if(empty == 0){
        dodajOglasNadjene(forma);
    }else{
        forma.children[forma.children.length-1].style.visibility = "visible";
    }
}

function validirajPodatkeUdomljene(forma){
    var empty = 0;
    var i = 0;
    while(i < forma.children.length-3 && empty == 0){
        if(forma.children[i++].value == "")
            empty++;
    }
    if(empty == 0){
        dodajOglasUdomljene(forma);
    }else{
        forma.children[forma.children.length-1].style.visibility = "visible";
    }
}

function NacrtajFormuIzgubljene()
{
    obrisiSve();
    var forma = document.createElement("form");
    forma.className = "formica";
    forma.enctype = "multipart/form-data";
    var unesiVrstu = document.createElement("input");
    unesiVrstu.type = "text";
    unesiVrstu.placeholder = "Vrsta životinje";
    var unesiRasu = document.createElement("input");
    unesiRasu.type = "text";
    unesiRasu.placeholder = "Unesite rasu!";
    var unesiStarost = document.createElement("input");
    unesiStarost.type = "text";
    unesiStarost.placeholder = "Starost Vaše životinje";
    var unesiCip = document.createElement("select");
    var unesiCipOption1 = document.createElement("option");
    unesiCipOption1.value = "Čipovan";
    unesiCipOption1.innerHTML = "Čipovan";
    unesiCip.appendChild(unesiCipOption1);
    var unesiCipOption2 = document.createElement("option");
    unesiCipOption2.value = "Nije čipovan";
    unesiCipOption2.innerHTML = "Nije čipovan";
    unesiCip.appendChild(unesiCipOption2);
    var unesiLokaciju = document.createElement("input");
    unesiLokaciju.type = "text";
    unesiLokaciju.placeholder = "Na kojoj lokaciji je izgubljen/a?";
    var unesiIme = document.createElement("input");
    unesiIme.type = "text";
    unesiIme.placeholder = "Ime Vašeg ljubimca";
    var unesiTekst = document.createElement("input");
    unesiTekst.type = "text";
    unesiTekst.placeholder = "Tekst oglasa";
    var unesiKontakt = document.createElement("input");
    unesiKontakt.type = "text";
    unesiKontakt.placeholder = "Vaše ime";
    var unesiTelefon = document.createElement("input");
    unesiTelefon.type = "text";
    unesiTelefon.placeholder = "Vaš kontakt telefon";
    
    const prviDiv = document.createElement("div");
    prviDiv.className = "divovi";
    const drugiDiv = document.createElement("div");
    drugiDiv.className = "divovi";

    var dodajOglasButton = document.createElement("button");
    dodajOglasButton.innerHTML = "Dodaj oglas";
    dodajOglasButton.className = "dugme";
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
    
    
    var vratiSe = document.createElement("button");
    vratiSe.className = "dugme";
    vratiSe.innerHTML = "Vrati se na početnu!";
    vratiSe.addEventListener("click", function(){
        location.reload();
    })
    var warning = document.createElement("p");
    warning.style.color = "Red";
    warning.innerHTML = "MORATE POPUNITI SVA POLJA PRE UNOSA!!!";
    warning.style.visibility = "hidden";
    prviDiv.appendChild(dodajOglasButton);
    drugiDiv.appendChild(vratiSe);
    forma.appendChild(prviDiv);
    forma.appendChild(drugiDiv);
    forma.appendChild(warning);

    forma.addEventListener("submit",function(e){
        e.preventDefault();
        return false;
    });
    dodajOglasButton.addEventListener("click", function(){
        validirajPodatkeIzgubljene(forma);
    });
}

function NacrtajFormuNadjene()
{
    obrisiSve();
    var forma = document.createElement("form");
    forma.className = "formica";
    forma.enctype = "multipart/form-data";

    var unesiVrstu = document.createElement("input");
    unesiVrstu.type = "text";
    unesiVrstu.placeholder = "Vrsta životinje";

    var unesiRasu = document.createElement("input");
    unesiRasu.type = "text";
    unesiRasu.placeholder = "Unesite rasu!";

    var unesiCip = document.createElement("select");
    var unesiCipOption1 = document.createElement("option");
    unesiCipOption1.value = "Proveren čip";
    unesiCipOption1.innerHTML = "Proveren čip";
    unesiCip.appendChild(unesiCipOption1);
    var unesiCipOption2 = document.createElement("option");
    unesiCipOption2.value = "Nije proveren čip";
    unesiCipOption2.innerHTML = "Nije proveren čip";
    unesiCip.appendChild(unesiCipOption2);

    var unesiSklonjen = document.createElement("input");
    unesiSklonjen.type = "text";
    unesiSklonjen.placeholder = "Da li je životinja sklonjena?";

    var unesiTekst = document.createElement("input");
    unesiTekst.type = "text";
    unesiTekst.placeholder = "Tekst oglasa";

    var unesiKontakt = document.createElement("input");
    unesiKontakt.type = "text";
    unesiKontakt.placeholder = "Vaše ime";

    var unesiTelefon = document.createElement("input");
    unesiTelefon.type = "text";
    unesiTelefon.placeholder = "Vaš kontakt telefon";
    
    const prviDiv = document.createElement("div");
    prviDiv.className = "divovi";
    const drugiDiv = document.createElement("div");
    drugiDiv.className = "divovi";

    var dodajOglasButton = document.createElement("button");
    dodajOglasButton.innerHTML = "Dodaj oglas";
    dodajOglasButton.className = "dugme";
    body.appendChild(forma);
    forma.appendChild(unesiVrstu);
    forma.appendChild(unesiRasu);
    forma.appendChild(unesiCip);
    forma.appendChild(unesiSklonjen);
    forma.appendChild(unesiTekst);
    forma.appendChild(unesiKontakt);
    forma.appendChild(unesiTelefon);
    
    
    var vratiSe = document.createElement("button");
    vratiSe.className = "dugme";
    vratiSe.innerHTML = "Vrati se na početnu!";
    vratiSe.addEventListener("click", function(){
        location.reload();
    })
    var warning = document.createElement("p");
    warning.style.color = "Red";
    warning.innerHTML = "MORATE POPUNITI SVA POLJA PRE UNOSA!!!";
    warning.style.visibility = "hidden";
    prviDiv.appendChild(dodajOglasButton);
    drugiDiv.appendChild(vratiSe);
    forma.appendChild(prviDiv);
    forma.appendChild(drugiDiv);
    forma.appendChild(warning);

    forma.addEventListener("submit",function(e){
        e.preventDefault();
        return false;
    });
    dodajOglasButton.addEventListener("click", function(){
        validirajPodatkeNadjene(forma);
    });
}


function NacrtajFormuUdomljene()
{
    obrisiSve();
    var forma = document.createElement("form");
    forma.className = "formica";
    forma.enctype = "multipart/form-data";

    var unesiVrstu = document.createElement("input");
    unesiVrstu.type = "text";
    unesiVrstu.placeholder = "Vrsta životinje";

    var unesiRasu = document.createElement("input");
    unesiRasu.type = "text";
    unesiRasu.placeholder = "Unesite rasu!";

    var unesiStarost = document.createElement("input");
    unesiStarost.type = "text";
    unesiStarost.placeholder = "Starost Vaše životinje";

    var unesiCip = document.createElement("select");
    var unesiCipOption1 = document.createElement("option");
    unesiCipOption1.value = "Čipovan";
    unesiCipOption1.innerHTML = "Čipovan";
    unesiCip.appendChild(unesiCipOption1);
    var unesiCipOption2 = document.createElement("option");
    unesiCipOption2.value = "Nije čipovan";
    unesiCipOption2.innerHTML = "Nije čipovan";
    unesiCip.appendChild(unesiCipOption2);

    var unesiSterilisan = document.createElement("select");
    var unesiSterilisanOption1 = document.createElement("option");
    unesiSterilisanOption1.value = "Sterilisan";
    unesiSterilisanOption1.innerHTML = "Sterilisan";
    unesiSterilisan.appendChild(unesiSterilisanOption1);
    var unesiSterilisanOption2 = document.createElement("option");
    unesiSterilisanOption2.value = "Nije sterilisan";
    unesiSterilisanOption2.innerHTML = "Nije sterilisan";
    unesiSterilisan.appendChild(unesiSterilisanOption2);

    var unesiUgovor = document.createElement("select");
    var unesiUgovorOption1 = document.createElement("option");
    unesiUgovorOption1.value = "Potreban ugovor o udomljavanju";
    unesiUgovorOption1.innerHTML = "Potreban ugovor o udomljavanju";
    unesiUgovor.appendChild(unesiUgovorOption1);
    var unesiUgovorOption2 = document.createElement("option");
    unesiUgovorOption2.value = "Nije potreban ugovor o udomljavanju";
    unesiUgovorOption2.innerHTML = "Nije potreban ugovor o udomljavanju";
    unesiUgovor.appendChild(unesiUgovorOption2);

    var unesiPapire = document.createElement("select");
    var unesiPapireOption1 = document.createElement("option");
    unesiPapireOption1.value = "Ima papire";
    unesiPapireOption1.innerHTML = "Ima papire";
    unesiPapire.appendChild(unesiPapireOption1);
    var unesiPapireOption2 = document.createElement("option");
    unesiPapireOption2.value = "Nema papire";
    unesiPapireOption2.innerHTML = "Nema papire";
    unesiPapire.appendChild(unesiPapireOption2);

    var unesiVakcine = document.createElement("select");
    var unesiVakcineOption1 = document.createElement("option");
    unesiVakcineOption1.value = "Vakcinisan";
    unesiVakcineOption1.innerHTML = "Vakcinisan";
    unesiVakcine.appendChild(unesiVakcineOption1);
    var unesiVakcineOption2 = document.createElement("option");
    unesiVakcineOption2.value = "Nije vakcinisan";
    unesiVakcineOption2.innerHTML = "Nije vakcinisan";
    unesiVakcine.appendChild(unesiVakcineOption2);
    
    var unesiIme = document.createElement("input");
    unesiIme.type = "text";
    unesiIme.placeholder = "Ime Vašeg ljubimca";

    var unesiMesto = document.createElement("input");
    unesiMesto.type = "text";
    unesiMesto.placeholder = "Da li postoji prostor u kom se zahteva da živi?";

    var unesiTekst = document.createElement("input");
    unesiTekst.type = "text";
    unesiTekst.placeholder = "Tekst oglasa";

    var unesiKontakt = document.createElement("input");
    unesiKontakt.type = "text";
    unesiKontakt.placeholder = "Vaše ime";

    var unesiTelefon = document.createElement("input");
    unesiTelefon.type = "text";
    unesiTelefon.placeholder = "Vaš kontakt telefon";
    
    const prviDiv = document.createElement("div");
    prviDiv.className = "divovi";
    const drugiDiv = document.createElement("div");
    drugiDiv.className = "divovi";

    var dodajOglasButton = document.createElement("button");
    dodajOglasButton.innerHTML = "Dodaj oglas";
    dodajOglasButton.className = "dugme";
    body.appendChild(forma);
    forma.appendChild(unesiVrstu);
    forma.appendChild(unesiRasu);
    forma.appendChild(unesiStarost);
    forma.appendChild(unesiCip);
    forma.appendChild(unesiSterilisan);
    forma.appendChild(unesiUgovor);
    forma.appendChild(unesiPapire);
    forma.appendChild(unesiVakcine);
    forma.appendChild(unesiMesto);
    forma.appendChild(unesiIme);
    forma.appendChild(unesiTekst);
    forma.appendChild(unesiKontakt);
    forma.appendChild(unesiTelefon);
    
    
    var vratiSe = document.createElement("button");
    vratiSe.className = "dugme";
    vratiSe.innerHTML = "Vrati se na početnu!";
    vratiSe.addEventListener("click", function(){
        location.reload();
    })
    var warning = document.createElement("p");
    warning.style.color = "Red";
    warning.innerHTML = "MORATE POPUNITI SVA POLJA PRE UNOSA!!!";
    warning.style.visibility = "hidden";
    prviDiv.appendChild(dodajOglasButton);
    drugiDiv.appendChild(vratiSe);
    forma.appendChild(prviDiv);
    forma.appendChild(drugiDiv);
    forma.appendChild(warning);

    forma.addEventListener("submit",function(e){
        e.preventDefault();
        return false;
    });
    dodajOglasButton.addEventListener("click", function(){
        validirajPodatkeUdomljene(forma);
    });
}

DodajDugme();




function NacrtajListuIzgubljene()
{
    obrisiSve();
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
}

function NacrtajListuNadjene()
{
    obrisiSve();
    var celaStrana = document.createElement("div");
    celaStrana.className = "strana";

    fetch("http://localhost:5000/api/NadjeneZivotinje").then(p =>
    {
        p.json().then(data => 
            {
                data.forEach(zivotinjeNadjene => {
                    const zivotinja = new NadjeneZivotinje(zivotinjeNadjene.id, zivotinjeNadjene.vrsta, zivotinjeNadjene.rasa, zivotinjeNadjene.proverenCip, zivotinjeNadjene.jelSklonjen, zivotinjeNadjene.tekstOglasa, zivotinjeNadjene.telefonKontakta, zivotinjeNadjene.imeKontakta);
                    var z1 = new NadjeneZivotinjeView(celaStrana, zivotinja);
                    z1.IscrtajMaliOglas();
                });
            })
    });
    
    body.appendChild(celaStrana);
}

function NacrtajListuUdomljene()
{
    obrisiSve();
    var celaStrana = document.createElement("div");
    celaStrana.className = "strana";

    fetch("http://localhost:5000/api/UdomljeneZivotinje").then(p =>
    {
        p.json().then(data => 
            {
                data.forEach(zivotinjeZaUdomljavanje => {
                    console.log(zivotinjeZaUdomljavanje.gdeSeZahtevaDaZivi);
                    const zivotinja = new ZaUdomljavanjeZivotinje(zivotinjeZaUdomljavanje.id, zivotinjeZaUdomljavanje.vrsta, zivotinjeZaUdomljavanje.rasa, zivotinjeZaUdomljavanje.imeZivotinje, zivotinjeZaUdomljavanje.starost, zivotinjeZaUdomljavanje.imaCip, zivotinjeZaUdomljavanje.sterilisan, zivotinjeZaUdomljavanje.obavezanUgovor, zivotinjeZaUdomljavanje.jelImaPapire, zivotinjeZaUdomljavanje.jelVakcinisan, zivotinjeZaUdomljavanje.gdeSeZahtevaDaZivi, zivotinjeZaUdomljavanje.tekstOglasa, zivotinjeZaUdomljavanje.telefonKontakta, zivotinjeZaUdomljavanje.imeKontakta);
                    var z1 = new ZaUdomljavanjeZivotinjeView(celaStrana, zivotinja);
                    z1.IscrtajMaliOglas();
                });
            })
    });
    
    body.appendChild(celaStrana);
}


/*fetch("http://localhost:5000/api/UdomljeneZivotinje").then(p =>
{
    p.json().then(data => 
        {
            data.forEach(zivotinjeZaUdomljavanje => {
                const zivotinja = new ZaUdomljavanjeZivotinje(zivotinjeZaUdomljavanje.id, zivotinjeZaUdomljavanje.vrsta, zivotinjeZaUdomljavanje.rasa, zivotinjeZaUdomljavanje.ime, zivotinjeZaUdomljavanje.starost, zivotinjeZaUdomljavanje.cip, zivotinjeZaUdomljavanje.sterilisan, zivotinjeZaUdomljavanje.ugovor, zivotinjeZaUdomljavanje.papiri, zivotinjeZaUdomljavanje.vakcinisan, zivotinjeZaUdomljavanje.gdeDaZivi, zivotinjeZaUdomljavanje.tekst, zivotinjeZaUdomljavanje.kontaktTelefon, zivotinjeZaUdomljavanje.kontaktIme, zivotinjeZaUdomljavanje.slike);
                var z1 = new ZaUdomljavanjeZivotinjeView(container, zivotinja);
                z1.IscrtajMaliOglas();
            });
        })
});*/

/*fetch("http://localhost:5000/api/IzgubljeneZivotinje").then(p =>
{
    p.json().then(data => 
        {
            data.forEach(zivotinjeIzgubljene => {
                const zivotinja = new IzgubljeneZivotinje(zivotinjeIzgubljene.id, zivotinjeIzgubljene.vrsta, zivotinjeIzgubljene.rasa, zivotinjeIzgubljene.starost, zivotinjeIzgubljene.cip, zivotinjeIzgubljene.lokacija, zivotinjeIzgubljene.ime, zivotinjeIzgubljene.tekstOglasa, zivotinjeIzgubljene.kontaktTelefon, zivotinjeIzgubljene.kontaktIme, zivotinjeIzgubljene.slikeIzgubljen);
                var z1 = new IzgubljeneZivotinjeView(podatak, zivotinja);
                z1.IscrtajMaliOglas();
            });
        })
});

fetch("http://localhost:5000/api/NadjeneZivotinje").then(p =>
{
    p.json().then(data => 
        {
            data.forEach(zivotinjeNadjene => {
                const zivotinja = new NadjeneZivotinje(zivotinjeNadjene.id, zivotinjeNadjene.vrsta, zivotinjeNadjene.rasa, zivotinjeNadjene.proverenCip, zivotinjeNadjene.jelImaCip, zivotinjeNadjene.sklonjen, zivotinjeNadjene.tekst, zivotinjeNadjene.kontaktTelefon, zivotinjeNadjene.kontaktIme, zivotinjeNadjene.nekeSlike);
                var z1 = new NadjeneZivotinjeView(container, zivotinja);
                z1.IscrtajMaliOglas();
            });
        })
});

fetch("http://localhost:5000/api/UdomljeneZivotinje").then(p =>
{
    p.json().then(data => 
        {
            data.forEach(zivotinjeZaUdom => {
                const zivotinja = new ZaUdomljavanjeZivotinje(zivotinjeZaUdom.id, zivotinjeZaUdom.vrsta, zivotinjeZaUdom.rasa, zivotinjeZaUdom.ime, zivotinjeZaUdom.starost, zivotinjeZaUdom.cip, zivotinjeZaUdom.sterilisan, zivotinjeZaUdom.ugovor, zivotinjeZaUdom.papiri, zivotinjeZaUdom.vakcinisan, zivotinjeZaUdom.gdeDaZivi, zivotinjeZaUdom.tekst, zivotinjeZaUdom.kontaktTelefon, zivotinjeZaUdom.kontaktIme, zivotinjeZaUdom.nekeSlike);
                var z1 = new ZaUdomljavanjeZivotinjeView(container, zivotinja);
                z1.IscrtajMaliOglas();
            });
        })
});
*/

function obrisiSve() 
{     
    var deca = [];     
    deca = body.children;          
    /*for(var i=0; i<deca.length; i++)     
        {   
            body.removeChild(deca[i]);      
        } */
    while(body.children.length > 0)
        body.removeChild(body.children[0]);
}

/*-----------------------------------------------------------------------------------
var slika = {
    put : "./img/Slike/petra.jpg"
}
var niz = [];
niz.push(slika);

var izgZv = new IzgubljeneZivotinje("123", "pas", "Cane Corso", "3 god", true, "PantLA", "Artur", "Ovo je tekst oglasa kao proba", "0604300213", "Petra", niz);
console.log(izgZv);
var data = {
    vrsta: izgZv.vrsta,
    rasa: izgZv.rasa,
    imeKontakta: izgZv.kontaktIme,
    telefonKontakta: izgZv.kontaktTelefon,
    tekstOglasa: izgZv.tekstOglasa,
    imaCip: izgZv.cip,
    starost: izgZv.starost,
    lokacijaGdeJeIzgubljen: izgZv.lokacija,
    imeZivotinje: izgZv.ime,
    nizSlika: izgZv.slike
}

 fetch("http://localhost:5000/api/IzgubljeneZivotinje", {
    method: "POST",
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
}).catch((error) => {
    console.error(error);
});*/