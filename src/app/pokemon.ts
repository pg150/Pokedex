export class Pokemon {
    id: number = null;
    name: string = '';
    picFront: string = '';
    picBack: string = '';
    stats: any[] = [];
    types: string[] = [];

    constructor(num: number, nom: string, imageFront: string, imageBack: string, statistiques: any[], type: string[]) {
      this.id = num;
      this.name = nom;
      this.picFront = imageFront;
      this.picBack = imageBack;
      this.stats = statistiques;
      this.types = type;
    }

    public toString() {
      return this.name;
    }

  }