import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/container/header/header.component';
import { HomeComponent } from './components/container/home/home.component';
import { ErrorComponent } from './components/container/error/error.component';
import { ContactoComponent } from './components/container/contacto/contacto.component';
import { AcercaDeComponent } from './components/container/acerca-de/acerca-de.component';
import { ListarMunicipioComponent } from './components/municipio/listar-municipio/listar-municipio.component';
import { CrearMunicipioComponent } from './components/municipio/crear-municipio/crear-municipio.component';
import { AdministrarMunicipioComponent } from './components/municipio/administrar-municipio/administrar-municipio.component';
import { ActualizarMunicipioComponent } from './components/municipio/actualizar-municipio/actualizar-municipio.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

import { esLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';

defineLocale('es', esLocale);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ErrorComponent,
    ContactoComponent,
    AcercaDeComponent,
    ListarMunicipioComponent,
    CrearMunicipioComponent,
    AdministrarMunicipioComponent,
    ActualizarMunicipioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule, 
    FormsModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
