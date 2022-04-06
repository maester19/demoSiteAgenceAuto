export class Voiture {
    constructor(
      public id:number,
      public title: string,
      public description: string,
      public imageUrl: string,
      public createdDate: Date,
      public price: number) {
    }
  }