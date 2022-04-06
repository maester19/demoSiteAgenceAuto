import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ElmtComponent } from './elmt/elmt.component';
import { ListPageComponent } from './list-page/list-page.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'voitures', component: ListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
