import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../ingredient';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-ingredient-info-card',
  templateUrl: './ingredient-info-card.component.html',
  styleUrls: ['./ingredient-info-card.component.css']
})
export class IngredientInfoCardComponent implements OnInit {

  @Input() myIngredient: Ingredient;
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
