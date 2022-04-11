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
import { VoitureService } from './services/voitures.service';

@NgModule({
  declarations: [
    AppComponent,
    ElmtComponent,
    ListPageComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    ItemPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
