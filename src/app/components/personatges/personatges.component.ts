import { Component, OnInit } from '@angular/core';
import { PersonatgesService, Personatge } from '../../Serveis/personatges.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-personatges',
  templateUrl: './personatges.component.html',
})
export class PersonatgesComponent implements OnInit {

  personatges:Personatge[] = [];

  constructor(private __personatgesService: PersonatgesService,
              private router:Router) { 
    //console.log("Constructor");

  }

  ngOnInit(): void {
    this.personatges = this.__personatgesService.getPersonatges();
    //console.log(this.personatges);
  }

  veurePersonatge(idx:number){
    this.router.navigate( ['/personatge', idx]);
  }

}
