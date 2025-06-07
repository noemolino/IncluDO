// Interfacce

interface IPartecipante {
  nome: string;
  cognome: string;
  paeseOrigine: string;
  livelloIstruzione: string;
  competenzeLinguistiche: string[];
  ambitoFormazione: string;
  iscrivitiCorso(corso: ICorso): void;
}

interface ICorso {
  titolo: string;
  descrizione: string;
  settoreProfessionale: string;
  durata: number;
  iscritti: IPartecipante[];
  aggiungiPartecipante(partecipante: IPartecipante): void;
}

interface IAzienda {
  nomeAzienda: string;
  settoreAttivita: string;
  descrizione: string;
  posizioniAperte: string[];
  offriPosizione(partecipante: IPartecipante, posizione: string): void;
}

// Implementazioni

class Partecipante implements IPartecipante {
  constructor(
    public nome: string,
    public cognome: string,
    public paeseOrigine: string,
    public livelloIstruzione: string,
    public competenzeLinguistiche: string[],
    public ambitoFormazione: string
  ) {}

  iscrivitiCorso(corso: ICorso): void {
    console.log(`${this.nome} si sta iscrivendo al corso ${corso.titolo}`);
    corso.aggiungiPartecipante(this);
  }
}

class Corso implements ICorso {
  iscritti: IPartecipante[] = [];

  constructor(
    public titolo: string,
    public descrizione: string,
    public settoreProfessionale: string,
    public durata: number
  ) {}

  aggiungiPartecipante(partecipante: IPartecipante): void {
    if (this.iscritti.includes(partecipante)) {
      console.log(`${partecipante.nome} è già iscritto a ${this.titolo}`);
      return;
    }
    this.iscritti.push(partecipante);
    console.log(`${partecipante.nome} è stato iscritto al corso ${this.titolo}`);
  }
}

class Azienda implements IAzienda {
  constructor(
    public nomeAzienda: string,
    public settoreAttivita: string,
    public descrizione: string,
    public posizioniAperte: string[]
  ) {}

  offriPosizione(partecipante: IPartecipante, posizione: string): void {
    if (!this.posizioniAperte.includes(posizione)) {
      console.log(`La posizione "${posizione}" non è disponibile in ${this.nomeAzienda}.`);
      return;
    }
    console.log(
      `${this.nomeAzienda} offre a ${partecipante.nome} ${partecipante.cognome} la posizione di ${posizione}.`
    );
  }
}

// Partecipanti

const partecipanteMarocchino = new Partecipante(
  "Youssef",
  "El Amrani",
  "Marocco",
  "Diploma Agrario",
  ["Arabo", "Francese", "Italiano"],
  "Agricoltura"
);

const partecipanteIndiano = new Partecipante(
  "Raj",
  "Patel",
  "India",
  "Diploma Tecnico",
  ["Hindi", "Inglese", "Italiano"],
  "Costruzioni"
);

// Corsi

const corsoAgricoltura = new Corso(
  "Tecniche di Agricoltura Sostenibile",
  "Formazione pratica su tecniche agricole rispettose dell'ambiente.",
  "Agricoltura",
  10
);

const corsoCostruzioni = new Corso(
  "Costruzioni Tradizionali in Muratura",
  "Tecniche di base per lavorare nell’edilizia tradizionale.",
  "Edilizia",
  14
);

// Aziende

const aziendaAgricola = new Azienda(
  "Fattoria Verde",
  "Agricoltura",
  "Azienda agricola biologica che coltiva ortaggi locali.",
  ["Assistente agricolo", "Operatore campo"]
);

const aziendaCostruzioni = new Azienda(
  "Edilizia Solidale",
  "Edilizia",
  "Impresa che ristruttura edifici nei borghi storici.",
  ["Manovale", "Apprendista muratore"]
);

// Logica

partecipanteMarocchino.iscrivitiCorso(corsoAgricoltura);
partecipanteIndiano.iscrivitiCorso(corsoCostruzioni);
aziendaAgricola.offriPosizione(partecipanteMarocchino, "Assistente agricolo");
aziendaCostruzioni.offriPosizione(partecipanteIndiano, "Apprendista muratore");