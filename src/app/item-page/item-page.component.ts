import { Component, Input, OnInit } from '@angular/core';
import { Voiture } from '../models/voiture.model';
import { VoitureService } from '../services/voitures.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {

  constructor(private voitureService : VoitureService) { }
  
  @Input() voiture!: Voiture;

  ngOnInit() {
    this.voiture = new Voiture (
       "4",
      "ma voiture",
      "une voiture hybride de luxe",
      "https://th.bing.com/th/id/R.020edc36b069e11f009d2db7003b08b9?rik=Rn73yQSfUt5%2fag&pid=ImgRaw&r=0",
      new Date(),
      43256,
    );
  }

}
