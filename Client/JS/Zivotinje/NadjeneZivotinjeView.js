import {NadjeneZivotinje} from "./NadjeneZivotinje.js"

export class NadjeneZivotinjeView
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