import {IzgubljeneZivotinje} from "IzgubljeneZivotinje.js";
import {IzgubljeneZivotinjeView} from "IzgubljeneZivotinjeView.js";
import {NadjeneZivotinje} from "NadjeneZivotinje.js";
import {NadjeneZivotinjeView} from "NadjeneZivotinjeView.js";
import {ZaUdomljavanjeZivotinje} from "ZaUdomljavanjeZivotinje.js";
import {ZaUdomljavanjeZivotinjeView} from "ZaUdomljavanjeZivotinjeView.js";

const html = document.getElementsByTagName("html")[0];
const body = document.getElementsByTagName("body")[0];

const container = document.createElement("div");
body.appendChild(container);

var z = new IzgubljeneZivotinje("2", "pas", "Cane Corso", "5 god", "ima", "PantL.A.", "Nora", "Mnogo volim svoga psa ja", "Petra", "0604300213", "./Slike/milic.jpg");

var zv = new IzgubljeneZivotinjeView(container, z);
zv.IscrtajMaliOglas();