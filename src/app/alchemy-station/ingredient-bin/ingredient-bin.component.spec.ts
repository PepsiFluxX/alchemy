import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientBinComponent } from './ingredient-bin.component';

describe('IngredientBinComponent', () => {
  let component: IngredientBinComponent;
  let fixture: ComponentFixture<IngredientBinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientBinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
