import { Component, Input, OnInit } from '@angular/core';
import { Voiture } from '../models/voiture.model';
import { VoitureService } from '../services/voitures.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  @Input() voitures!: Voiture[];

  constructor(private voitureService: VoitureService){}

  ngOnInit() {
    this.voitures = this.voitureService.getAllVoiture();

    // .subscribe(
    //   data=>{
    //     this.voitures = data;
    //   }
    // );
  }

}
