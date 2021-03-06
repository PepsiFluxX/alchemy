import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-ingredient-bin',
  templateUrl: './ingredient-bin.component.html',
  styleUrls: ['./ingredient-bin.component.css']
})
export class IngredientBinComponent implements OnInit {

  things = [
    'item1',
    'item2',
    'item3'
  ];

  stuff = [
    'item4',
    'item5',
    'item6'
  ];

  constructor() { }

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
    }
  }
}
