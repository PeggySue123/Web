import {ZaUdomljavanjeZivotinje} from "./ZaUdomljavanjeZivotinje.js"

export class ZaUdomljavanjeZivotinjeView
{
    constructor(container, objekat)
    {
        this.container = container;
        this.objekat = objekat;
    }

    IscrtajMaliOglas() 
    {
        var img = document.createElement("img");
        img.src = this.objekat.slike[0];
        img.className = "slike";
        this.container.appendChild(img);
    }
}