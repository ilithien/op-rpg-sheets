export interface Attribute {
    name: string;
    code: string;
    value: number;
  }
  
  export interface Specialty {
    name: string;
  }
  
  export interface Ability {
    name: string;
    code: string;
    value: number;
    specialties: Specialty[];
  }
  
  export interface Discipline {
    description: string;
    powers: Power[]
  }
  
  export interface Power {
    name: string;
    level: number;
    description: string;
  }
  
  export interface Actor {
    id: string;
    name: string;
    image: string;
    clan: string;
    predatorType: string;
    attributes: Attribute[];
    abilities: Ability[];
    disciplines: Record<string, Discipline>;
    generation: number;
    sire: string;
    notes: string;
    biography: string;
    gear: string;
    ambition: string;
    desire: string;
    humanity: number;
  }
  