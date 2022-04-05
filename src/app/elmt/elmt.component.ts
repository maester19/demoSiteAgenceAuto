import { Component, Input, OnInit } from '@angular/core';
import { Voiture } from '../models/voiture.model';

@Component({
  selector: 'app-elmt',
  templateUrl: './elmt.component.html',
  styleUrls: ['./elmt.component.scss']
})
export class ElmtComponent implements OnInit {
  title!: string; 
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;
  @Input() voiture!: Voiture;

  ngOnInit(){
    this.title = "maester";
    this.description = "developpeur fullstack a ibaas lab";
    this.createdDate = new Date();
    this.snaps = 19;
    this.imageUrl = "C:\Users\Maester\Desktop\projet cr\crepe choco.jpg";
    this.buttonText= "Oh Snap!";
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.voiture.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.voiture.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
