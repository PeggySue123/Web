import {izgubljeneZivotinje} from "izgubljeneZivotinje.js"

export class IzgubljeneZivotinjeView
{
    constructor(container, objekat)
    {
        this.container = container;
        this.objekat = objekat;
    }

    IscrtajMaliOglas() 
    {
        var img = document.createElement("img");
        img.src = "./Slike/milic.jpg";
        this.container.appendChild(img);
    }
}