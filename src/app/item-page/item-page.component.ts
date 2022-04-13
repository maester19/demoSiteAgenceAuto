import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Voiture } from '../models/voiture.model';
import { VoitureService } from '../services/voitures.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {

  constructor(
    private voitureService : VoitureService, 
    private route: ActivatedRoute) { }
  // @Input() voiture!: Voiture;
  car!:Observable<Voiture>;

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.car = this.voitureService.getVoiture(id); 
  }

}
