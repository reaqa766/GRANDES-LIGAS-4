import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CuadroComponent } from './cuadro/cuadro.component';
import { JardinesComponent } from './jardines/jardines.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { MenubarComponent } from './menubar/menubar.component';
import { NosostrosComponent } from './nosostros/nosostros.component';
import { RegistreseComponent } from './registrese/registrese.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PitchersComponent } from './pitchers/pitchers.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    CuadroComponent,
    JardinesComponent,
    NosotrosComponent,
    MenubarComponent,
    NosostrosComponent,
    RegistreseComponent,
    NoticiasComponent,
    PitchersComponent,
    IngresarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
