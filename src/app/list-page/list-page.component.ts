import { Component, Input, OnInit } from '@angular/core';
import { Voiture } from '../models/voiture.model';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  @Input() myvoiture!:Voiture;

  ngOnInit() {
    this.myvoiture = new Voiture(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://th.bing.com/th/id/R.020edc36b069e11f009d2db7003b08b9?rik=Rn73yQSfUt5%2fag&pid=ImgRaw&r=0',
      new Date(),
      0
    );
  }

}
