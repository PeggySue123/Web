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
dugmeZaIzgubljene.innerHTML = "Vidi životinje";
/*var dugmeZaNadjene = document.createElement("button");
dugmeZaNadjene.innerHTML = "Nađene životinje";
var dugmeZaUdomljene = document.createElement("button");
dugmeZaUdomljene.innerHTML = "Životinje za udomljavanje";*/

function DodajDugme()
{
    
    container.appendChild(tekst);
    container.appendChild(dugmeZaDodavanje);
    container.appendChild(tekstNaDnuDiv);    
    container.appendChild(dugmeZaIzgubljene);    
    /*body.appendChild(dugmeZaNadjene);    
    body.appendChild(dugmeZaUdomljene);*/

    dugmeZaDodavanje.className = "dugme";
    dugmeZaIzgubljene.className = "dugme";
    /*dugmeZaNadjene.className = "dugme";
    dugmeZaUdomljene.className = "dugme";*/

    dugmeZaDodavanje.addEventListener("click", function(){
        //PitajZaFormu();
        NacrtajFormuIzgubljene();
    });

    dugmeZaIzgubljene.addEventListener("click", function(){
        NacrtajListuIzgubljene();
    });
}

/*function PitajZaFormu()
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
}*/


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
    
    
    /*var img1 = document.createElement("input");
    img1.type = "file";
    forma.appendChild(img1);
    var img2 = document.createElement("input");
    img2.type = "file";
    forma.appendChild(img2);
    var img3 = document.createElement("input");
    img3.type = "file";
    forma.appendChild(img3);
    var img4 = document.createElement("input");
    img4.type = "file";
    forma.appendChild(img4);*/
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