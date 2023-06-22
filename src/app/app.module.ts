import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElmtComponent } from './elmt/elmt.component';
import { ListPageComponent } from './list-page/list-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { VoitureService } from './services/voiture/voiture.service';
import { HttpClientModule } from '@angular/common/http';
import { FormVoitureComponent } from './form-voiture/form-voiture.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ElmtComponent,
    ListPageComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    ItemPageComponent,
    FormVoitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [VoitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
