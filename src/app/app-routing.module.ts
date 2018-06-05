import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CuadroComponent } from './cuadro/cuadro.component';
import { JardinesComponent } from './jardines/jardines.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PitchersComponent } from './pitchers/pitchers.component';
import { RegistreseComponent } from './registrese/registrese.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { IngresarComponent } from './ingresar/ingresar.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent,
   
  },
  
  
  {
    path:'cuadro',
    component: CuadroComponent,
   
  },

  {
    path: 'jardines',
    component: JardinesComponent,

  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },

  {
    path: 'noticias',
    component: NoticiasComponent,
  },

  {
    path: 'pitchers',
    component: PitchersComponent,
  },

  {
    path: 'registrese',
    component: RegistreseComponent,
  },
  {
    path: 'ingresar',
    component: IngresarComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
