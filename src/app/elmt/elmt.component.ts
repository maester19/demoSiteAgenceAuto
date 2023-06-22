import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VoitureService } from '../services/voiture/voiture.service';

@Component({
  selector: 'app-elmt',
  templateUrl: './elmt.component.html',
  styleUrls: ['./elmt.component.scss']
})
export class ElmtComponent implements OnInit {
  @Input() voiture!: any;
  car!:any;

  constructor(
    private voitureService: VoitureService, 
    private router: Router
    ){}

  ngOnInit(){
    
  }

  onContinue(){
    this.router.navigateByUrl("pageDetail/"+this.voiture._id);
  }

}
