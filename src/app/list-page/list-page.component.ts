import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Voiture } from '../models/voiture.model';
import { VoitureService } from '../services/voiture/voiture.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  voitures!: Voiture[];
  cars:any = [];

  constructor(private voitureService: VoitureService){}

  ngOnInit() {
    this.getVoiture()
  }

  getVoiture(){
  	this.voitureService.getAll().then(response => {
    	this.cars = response
    });
  }

  delete(id: string){
  	this.voitureService.delete(id).then(response => {
  		this.getVoiture()
  	})
  }

}
