import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PersonatgesComponent } from './components/personatges/personatges.component';
import {PersonatgeComponent} from './components/personatge/personatge.component';
import {BuscadorComponent} from './components/buscador/buscador.component';
const app_routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'personatges', component: PersonatgesComponent},
    { path: 'personatge/:id', component: PersonatgeComponent},
    { path: 'buscar/:termino', component: BuscadorComponent},
    { path: '**', pathMatch: 'full', redirectTo:'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
