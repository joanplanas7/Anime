import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutes
import { app_routing } from './app.routes';



// Serveis
import { PersonatgesService } from './Serveis/personatges.service';


// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PersonatgesComponent } from './components/personatges/personatges.component';
import { PersonatgeComponent } from './components/personatge/personatge.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PersonatgesComponent,
    PersonatgeComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [
    PersonatgesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
