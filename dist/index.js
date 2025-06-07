"use strict";
// Interfacce
// Implementazioni
class Partecipante {
    constructor(nome, cognome, paeseOrigine, livelloIstruzione, competenzeLinguistiche, ambitoFormazione) {
        this.nome = nome;
        this.cognome = cognome;
        this.paeseOrigine = paeseOrigine;
        this.livelloIstruzione = livelloIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.ambitoFormazione = ambitoFormazione;
    }
    iscrivitiCorso(corso) {
        console.log(`${this.nome} si sta iscrivendo al corso ${corso.titolo}`);
        corso.aggiungiPartecipante(this);
    }
}
class Corso {
    constructor(titolo, descrizione, settoreProfessionale, durata) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
        this.iscritti = [];
    }
    aggiungiPartecipante(partecipante) {
        if (this.iscritti.includes(partecipante)) {
            console.log(`${partecipante.nome} è già iscritto a ${this.titolo}`);
            return;
        }
        this.iscritti.push(partecipante);
        console.log(`${partecipante.nome} è stato iscritto al corso ${this.titolo}`);
    }
}
class Azienda {
    constructor(nomeAzienda, settoreAttivita, descrizione, posizioniAperte) {
        this.nomeAzienda = nomeAzienda;
        this.settoreAttivita = settoreAttivita;
        this.descrizione = descrizione;
        this.posizioniAperte = posizioniAperte;
    }
    offriPosizione(partecipante, posizione) {
        if (!this.posizioniAperte.includes(posizione)) {
            console.log(`La posizione "${posizione}" non è disponibile in ${this.nomeAzienda}.`);
            return;
        }
        console.log(`${this.nomeAzienda} offre a ${partecipante.nome} ${partecipante.cognome} la posizione di ${posizione}.`);
    }
}
// Partecipanti
const partecipanteMarocchino = new Partecipante("Youssef", "El Amrani", "Marocco", "Diploma Agrario", ["Arabo", "Francese", "Italiano"], "Agricoltura");
const partecipanteIndiano = new Partecipante("Raj", "Patel", "India", "Diploma Tecnico", ["Hindi", "Inglese", "Italiano"], "Costruzioni");
// Corsi
const corsoAgricoltura = new Corso("Tecniche di Agricoltura Sostenibile", "Formazione pratica su tecniche agricole rispettose dell'ambiente.", "Agricoltura", 10);
const corsoCostruzioni = new Corso("Costruzioni Tradizionali in Muratura", "Tecniche di base per lavorare nell’edilizia tradizionale.", "Edilizia", 14);
// Aziende
const aziendaAgricola = new Azienda("Fattoria Verde", "Agricoltura", "Azienda agricola biologica che coltiva ortaggi locali.", ["Assistente agricolo", "Operatore campo"]);
const aziendaCostruzioni = new Azienda("Edilizia Solidale", "Edilizia", "Impresa che ristruttura edifici nei borghi storici.", ["Manovale", "Apprendista muratore"]);
// Logica
partecipanteMarocchino.iscrivitiCorso(corsoAgricoltura);
partecipanteIndiano.iscrivitiCorso(corsoCostruzioni);
aziendaAgricola.offriPosizione(partecipanteMarocchino, "Assistente agricolo");
aziendaCostruzioni.offriPosizione(partecipanteIndiano, "Apprendista muratore");
