export class Pokemon {
  id: number;
  name: string;
  type1: string;
  type2: string;
  hp: number;
  attaque: number;
  defense: number;
  attSpe: number;
  defSpe: number;
  vitesse: number;
  dateCapture: Date;
  constructor(id = null, name = null, type1 = null, type2 = null, hp = null, attaque = null, defense = null, attSpe = null, defSpe = null, vitesse = null, date = null) {
    this.id = id;
    this.name = name
    this.type1 = type1;
    this.type2 = type2;
    this.hp = hp;
    this.attaque = attaque;
    this.attSpe = attSpe;
    this.defSpe = defSpe;
    this.vitesse = vitesse;
    this.dateCapture = date;
  }
}