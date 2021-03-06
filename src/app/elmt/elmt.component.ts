import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voiture } from '../models/voiture.model';
import { VoitureService } from '../services/voitures.service';

@Component({
  selector: 'app-elmt',
  templateUrl: './elmt.component.html',
  styleUrls: ['./elmt.component.scss']
})
export class ElmtComponent implements OnInit {
  buttonText!: string;
  @Input() voiture!: Voiture;

  constructor(private voitureService: VoitureService, private router: Router){}

  ngOnInit(){
    this.buttonText= "View more!";
  }

  onContinue(){
    this.router.navigateByUrl("pageDetail");
  }

}
