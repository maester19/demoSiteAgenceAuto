import { Component, Input, OnInit } from '@angular/core';
import { Voiture } from './models/voiture.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  voitures!: Voiture[];

  ngOnInit(){
    this.voitures = [
      {  
        title:'Audi',
        description: 'une hybride tout terrain !',
        imageUrl: 'https://th.bing.com/th/id/R.020edc36b069e11f009d2db7003b08b9?rik=Rn73yQSfUt5%2fag&pid=ImgRaw&r=0',
        createdDate: new Date(),
        price: 40000
      },
      {  
        title:'toyota',
        description: 'voiture de ville et decampagne !',
        imageUrl: 'https://th.bing.com/th/id/R.020edc36b069e11f009d2db7003b08b9?rik=Rn73yQSfUt5%2fag&pid=ImgRaw&r=0',
        createdDate: new Date(),
        price: 234000
      },
      {  
        title:'Ferary',
        description: 'le confort au service de la vitesse !',
        imageUrl: 'https://th.bing.com/th/id/R.020edc36b069e11f009d2db7003b08b9?rik=Rn73yQSfUt5%2fag&pid=ImgRaw&r=0',
        createdDate: new Date(),
        price: 1223444
      }
    ];
  }
}
