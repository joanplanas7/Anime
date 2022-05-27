import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PersonatgesService} from '../../Serveis/personatges.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  personatges:any[]=[]
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _personatgesService: PersonatgesService,
              private router:Router ) { 

              }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.termino=params['termino'];
      this.personatges = this._personatgesService.buscarPersonatges(params['termino']);

    })
  }
  veurePersonatge(idx:number){
    this.router.navigate( ['/personatge', idx]);
  }

}
