import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-mixing-table',
  templateUrl: './mixing-table.component.html',
  styleUrls: ['./mixing-table.component.css']
})
export class MixingTableComponent implements OnInit {

  ingredient_storage = new Array<Ingredient>(4);
  constructor() { }

  ngOnInit(): void {
  }

  

}
