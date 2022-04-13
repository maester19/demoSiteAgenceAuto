import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Voiture } from '../models/voiture.model';
import { VoitureService } from '../services/voitures.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  voitures!: Voiture[];
  cars!:Observable<Voiture[]>;

  constructor(private voitureService: VoitureService){}

  ngOnInit() {
    this.cars = this.voitureService.getAllVoiture();
  }

}
