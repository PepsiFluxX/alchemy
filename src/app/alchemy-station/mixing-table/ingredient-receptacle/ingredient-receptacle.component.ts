import { Component, OnInit } from '@angular/core';
import { Ingredient, BondType, Effect } from '../../ingredient';

@Component({
  selector: 'app-ingredient-receptacle',
  templateUrl: './ingredient-receptacle.component.html',
  styleUrls: ['./ingredient-receptacle.component.css']
})
export class IngredientReceptacleComponent implements OnInit {

  def_string = "Place Ingredient Here";
  myBlankState = new Ingredient();
  myIngredient: Ingredient = null;

  state: string = "detailed";

  //////////
  
  //////////
  constructor() {
    this.myIngredient = this.myBlankState;
   }

  ngOnInit(): void {



  }

  onTaskDrop($event){
    
  }
  // Display Ingredient



}
