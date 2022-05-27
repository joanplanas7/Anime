import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {PersonatgesService} from '../../Serveis/personatges.service';

@Component({
  selector: 'app-personatge',
  templateUrl: './personatge.component.html',

})
export class PersonatgeComponent implements OnInit {

  personatge:any ={};

  constructor(private activateRoute: ActivatedRoute, 
              private _personatgesService: PersonatgesService  
    ) { 
    this.activateRoute.params.subscribe(params =>{
      console.log(params['id']);
      this.personatge = this._personatgesService.getPersonatge(params['id']);

    });

  }

  ngOnInit(): void {
  }

}
