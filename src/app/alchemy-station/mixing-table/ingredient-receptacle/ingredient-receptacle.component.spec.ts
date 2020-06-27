import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientReceptacleComponent } from './ingredient-receptacle.component';

describe('IngredientReceptacleComponent', () => {
  let component: IngredientReceptacleComponent;
  let fixture: ComponentFixture<IngredientReceptacleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientReceptacleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientReceptacleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
