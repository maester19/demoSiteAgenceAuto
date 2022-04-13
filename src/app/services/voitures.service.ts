import { Injectable } from '@angular/core';
import { Voiture } from '../models/voiture.model';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  // voitures: Voiture[] = [
  //   {  
  //     id:'1',
  //     title:'Audi',
  //     description: 'une hybride tout terrain !',
  //     imageUrl: 'https://th.bing.com/th/id/R.020edc36b069e11f009d2db7003b08b9?rik=Rn73yQSfUt5%2fag&pid=ImgRaw&r=0',
  //     createdDate: new Date(),
  //     price: 40000
  //   },
  //   {  
  //     id:'2',
  //     title:'toyota',
  //     description: 'voiture de ville et decampagne !',
  //     imageUrl: 'https://th.bing.com/th/id/R.020edc36b069e11f009d2db7003b08b9?rik=Rn73yQSfUt5%2fag&pid=ImgRaw&r=0',
  //     createdDate: new Date(),
  //     price: 234000
  //   },
  //   {  
  //     id:'3',
  //     title:'Ferary',
  //     description: 'le confort au service de la vitesse !',
  //     imageUrl: 'https://th.bing.com/th/id/R.020edc36b069e11f009d2db7003b08b9?rik=Rn73yQSfUt5%2fag&pid=ImgRaw&r=0',
  //     createdDate: new Date(),
  //     price: 1223444
  //   }
  // ];

  constructor( private _http:HttpClient ){}

  // getAllVoiture(): Voiture[] {
  //   return this.voitures;
  // }

  getAllVoiture():Observable<Voiture[]>{
    return this._http.get<Voiture[]>('http://localhost:3000/api/voitures');
  }

  getVoiture(_id : string):Observable<Voiture>{
    return this._http.get<Voiture>('http://localhost:3000/api/voiture/'+_id);
  }

  voitureById(voitureId: number): void{
  }
}