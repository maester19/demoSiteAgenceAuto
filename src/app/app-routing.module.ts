import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPageComponent } from './item-page/item-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { FormVoitureComponent } from './form-voiture/form-voiture.component';

const routes: Routes = [
  { path: 'voitures', component: ListPageComponent },
  { path: 'addCar/:id', component: FormVoitureComponent },
  { path: '', component: LandingPageComponent },
  { path: 'pageDetail/:id', component: ItemPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
