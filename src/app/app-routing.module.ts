import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPageComponent } from './item-page/item-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListPageComponent } from './list-page/list-page.component';

const routes: Routes = [
  { path: 'voitures', component: ListPageComponent },
  { path: '', component: LandingPageComponent },
  { path: 'pageDetail/:id', component: ItemPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
