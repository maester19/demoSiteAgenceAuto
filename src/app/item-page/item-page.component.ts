import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Voiture } from '../models/voiture.model';
import { VoitureService } from '../services/voiture/voiture.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {

  car:any;
  constructor(
    private voitureService : VoitureService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.car = this.voitureService.createEmptyVoiture()
    const id = this.route.snapshot.params['id'];
    this.voitureService.getOne(id).then(response => {
      this.car = response
    }); 
  }

}
