import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendService } from '../backend/backend.service';
import { FormatVoitureService } from './format-voiture.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VoitureService {
  url = '/voiture';

  auth: any
  
  constructor(
    private http: HttpClient,
    private formatVoitureService: FormatVoitureService,
  ) {}
  
  public getAll() {
    return new Promise((resolve, reject) => {
      this.http.get<any>(BackendService.url + this.url).subscribe((response) => {
        resolve(response.voiture);
      });
    });
  }

  public getByName(name: any) {
    return new Promise((resolve, reject) => {
      this.http.get<any>(BackendService.url + this.url+'/getByName/'+ name).subscribe((response) => {
        resolve(response.cars);
      });
    });
  }

  public search(val: any) {
    return new Promise((resolve, reject) => {
      this.http
        .get(BackendService.url + this.url + '/search/' + val)
        .subscribe((response) => {
          resolve(response);
        });
    });
  }

  /* mise a jour d'un voiture */
  public update(voiture: any) {
    var url = BackendService.url + this.url + '/' + voiture._id;
    var data = { voiture: voiture }
    return new Promise((resolve, reject) => {
      this.http
        .put(url, data)
        .subscribe((response) => {
          resolve(response);
        });
    });
  }
   /* creer d'un voiture */
   public create(voiture: any) {
    var url = BackendService.url + this.url;
    var data= { voiture: voiture }
    return new Promise((resolve, reject) => {
      this.http
        .post(url, data)
        .subscribe((response) => {
          resolve(response);
        });
    });
  }

   /* supprimer un user */
   public delete(id: any) {
    var url = BackendService.url + this.url + '/' + id;
    return new Promise((resolve, reject) => {
      this.http
        .delete(url, {})
        .subscribe((response) => {
          resolve(response);
        });
    });
  }
  // afficher un voiture 
  public getOne(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get<any>(`${BackendService.url + this.url}/${id}`)
      .subscribe({
        next: response => {
            resolve(response.voiture);
        },
        error: error => {
           reject(error);
        }
      });
    })
  }
   
  createEmptyVoiture(){
   return this.formatVoitureService.createEmptyVoiture();
  }

}
