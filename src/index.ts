// Interfaces

interface IParticipant {
  firstName: string;
  lastName: string;
  countryOfOrigin: string;
  educationLevel: string;
  languageSkills: string[];
  trainingField: string;
  enrollInCourse(course: ICourse): void;
}

interface ICourse {
  title: string;
  description: string;
  professionalSector: string;
  duration: number;
  enrolled: IParticipant[];
  addParticipant(participant: IParticipant): void;
}

interface ICompany {
  companyName: string;
  businessSector: string;
  description: string;
  openPositions: string[];
  offerPosition(participant: IParticipant, position: string): void;
}

// Implementations

class Participant implements IParticipant {
  constructor(
    public firstName: string,
    public lastName: string,
    public countryOfOrigin: string,
    public educationLevel: string,
    public languageSkills: string[],
    public trainingField: string
  ) {}

  enrollInCourse(course: ICourse): void {
    console.log(`${this.firstName} is enrolling in the course ${course.title}`);
    course.addParticipant(this);
  }
}

class Course implements ICourse {
  enrolled: IParticipant[] = [];

  constructor(
    public title: string,
    public description: string,
    public professionalSector: string,
    public duration: number
  ) {}

  addParticipant(participant: IParticipant): void {
    if (this.enrolled.includes(participant)) {
      console.log(`${participant.firstName} is already enrolled in ${this.title}`);
      return;
    }
    this.enrolled.push(participant);
    console.log(`${participant.firstName} has been enrolled in the course ${this.title}`);
  }
}

class Company implements ICompany {
  constructor(
    public companyName: string,
    public businessSector: string,
    public description: string,
    public openPositions: string[]
  ) {}

  offerPosition(participant: IParticipant, position: string): void {
    if (!this.openPositions.includes(position)) {
      console.log(`The position "${position}" is not available at ${this.companyName}.`);
      return;
    }
    console.log(
      `${this.companyName} offers ${participant.firstName} ${participant.lastName} the position of ${position}.`
    );
  }
}

// Participants

const moroccanParticipant = new Participant(
  "Youssef",
  "El Amrani",
  "Morocco",
  "Agricultural Diploma",
  ["Arabic", "French", "Italian"],
  "Agriculture"
);

const indianParticipant = new Participant(
  "Raj",
  "Patel",
  "India",
  "Technical Diploma",
  ["Hindi", "English", "Italian"],
  "Construction"
);

// Courses

const agricultureCourse = new Course(
  "Sustainable Agriculture Techniques",
  "Practical training on environmentally friendly farming techniques.",
  "Agriculture",
  10
);

const constructionCourse = new Course(
  "Traditional Masonry Construction",
  "Basic techniques for working in traditional construction.",
  "Construction",
  14
);

// Companies

const agriculturalCompany = new Company(
  "Green Farm",
  "Agriculture",
  "Organic farm growing local vegetables.",
  ["Agricultural Assistant", "Field Operator"]
);

const constructionCompany = new Company(
  "Solidarity Construction",
  "Construction",
  "Company renovating buildings in historic villages.",
  ["Laborer", "Apprentice Mason"]
);

// Logic

moroccanParticipant.enrollInCourse(agricultureCourse);
indianParticipant.enrollInCourse(constructionCourse);

agriculturalCompany.offerPosition(moroccanParticipant, "Agricultural Assistant");
constructionCompany.offerPosition(indianParticipant, "Apprentice Mason");