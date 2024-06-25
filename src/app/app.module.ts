import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BatimentComponent } from './batiment/batiment.component';
import { ServicesComponent } from './services/services.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { FooterComponent } from './footer/footer.component';
import { MentionsComponent } from './mentions/mentions.component';
import { DonneesComponent } from './donnees/donnees.component';
import { AccessibiliteComponent } from './accessibilite/accessibilite.component';
import { CookiesComponent } from './cookies/cookies.component';
import { ArtisanComponent } from './artisan/artisan.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BatimentComponent,
    ServicesComponent,
    FabricationComponent,
    AlimentationComponent,
    FooterComponent,
    MentionsComponent,
    DonneesComponent,
    AccessibiliteComponent,
    CookiesComponent,
    ArtisanComponent,
    FicheArtisanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
