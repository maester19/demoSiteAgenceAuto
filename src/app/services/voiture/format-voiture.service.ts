import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatVoitureService {

  constructor() {}
  format(response: any) {
    const vals = [];
    var i = 0;
    var k = 0;
    var taille = response.length;
    while (i < taille) {
      const tab = [];
      for (var j = 0; j < 10; j++) {
        if (i < taille) {
          tab[j] = response[i]
        }
        i++;
      }
      vals[k] = tab;
      k++;
    }

    return { data: vals, nbResult: taille, current: 0, length: k };
  }

  createEmptyVoiture(){
    return  {
      //id 
      _id: "",
      //title 
      title: "",
      //description
      description: "",
      //price
      price: 0,
      //imageUrl
      imageUrl: ""
    }
  }
}
