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
  name: any = ""

  constructor(private voitureService: VoitureService){}

  ngOnInit() {
    this.getCar()
  }

  getCar(){
    this.voitureService.getAll().then(response => {
      this.cars = response
    });
  }

  search(){
    this.name = this.name.trim()
    if(this.name != ""){
      this.voitureService.getByName(this.name).then(response => {
        this.cars = response
      })
    }else{
      this.getCar()
    }
    
  }
}
