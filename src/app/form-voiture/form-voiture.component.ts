import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VoitureService } from '../services/voiture/voiture.service';

@Component({
  selector: 'app-form-voiture',
  templateUrl: './form-voiture.component.html',
  styleUrls: ['./form-voiture.component.scss']
})
export class FormVoitureComponent implements OnInit {

  car: any
  id: any = ""
  constructor(
    private voitureService : VoitureService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
  	 this.getCar()
  }

  getCar(){
  	this.id = this.route.snapshot.params['id'];
  	if(this.id == "new")
  		this.car = this.voitureService.createEmptyVoiture()
  	else{
  		this.voitureService.getOne(this.id).then(response => {
	      this.car = response
	    });
  	}
  }

  submit(){
  	if(this.car.title != "" && this.car.price != 0){
  		this.voitureService.create(this.car).then(response => {
  			this.router.navigateByUrl("/voitures")
  		})
  	}
  }

  update(){
  	if(this.car.title != "" && this.car.price != 0){
  		this.voitureService.update(this.car).then(response => {
  			this.router.navigateByUrl("/voitures")
  			console.log(response)
  		})
  	}
  }

}
