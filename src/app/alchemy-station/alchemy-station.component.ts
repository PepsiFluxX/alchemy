import { Component, OnInit } from '@angular/core';
import { Ingredient, BondType } from './ingredient';

@Component({
  selector: 'app-alchemy-station',
  templateUrl: './alchemy-station.component.html',
  styleUrls: ['./alchemy-station.component.css']
})
export class AlchemyStationComponent implements OnInit {

  ingredient_storage : Array<Ingredient>;
  ingredient_receptacles = new Array<Ingredient>(4);

  constructor() { }



  ngOnInit(): void {
  
  }

  setIngredients(){

    // TODO: Size array based on difficulty


    let numIngredients = 4;
    this.ingredient_storage = new Array<Ingredient>(numIngredients);
    for(let i=0; i<numIngredients; i++){
      this.ingredient_storage[i] = new Ingredient();
    }  
  }

}
