export class Voiture {
    constructor(
      public _id:string,
      public title: string,
      public description: string,
      public imageUrl: string,
      public createdDate: Date,
      public price: number) {
    }
  }