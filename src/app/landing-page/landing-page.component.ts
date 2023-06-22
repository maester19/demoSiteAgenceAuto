import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Voiture } from '../models/voiture.model';
import { VoitureService } from '../services/voiture/voiture.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  voitures!: Voiture[];
  cars:any = [];

  constructor(private voitureService: VoitureService){}

  ngOnInit() {
    this.voitureService.getAll().then(response => {
    	this.cars = response
    });
  }
}
