import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/container/error/error.component';
import { ContactoComponent } from './components/container/contacto/contacto.component';
import { AcercaDeComponent } from './components/container/acerca-de/acerca-de.component';
import { ListarMunicipioComponent } from './components/municipio/listar-municipio/listar-municipio.component';
import { HomeComponent } from './components/container/home/home.component';
import { CrearMunicipioComponent } from './components/municipio/crear-municipio/crear-municipio.component';
import { ActualizarMunicipioComponent } from './components/municipio/actualizar-municipio/actualizar-municipio.component';
import { AdministrarMunicipioComponent } from './components/municipio/administrar-municipio/administrar-municipio.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactoComponent },
  { path: 'aboutMe', component: AcercaDeComponent },

  { 
    path:'town', children:[
      { path:'list', component:ListarMunicipioComponent },
      { path:'add', component:CrearMunicipioComponent },
      { path:'update/:codMunicipio', component:ActualizarMunicipioComponent },
      { path:'admin', component:AdministrarMunicipioComponent },

      /*Rutas obligatorias*/
      { path:'', redirectTo: 'list', pathMatch:'full' },
      { path:'**', component: ErrorComponent }
    ]
  },

  /*Rutas obligatorias*/
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
