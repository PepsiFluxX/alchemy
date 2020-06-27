import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientInfoCardComponent } from './ingredient-info-card.component';

describe('IngredientInfoCardComponent', () => {
  let component: IngredientInfoCardComponent;
  let fixture: ComponentFixture<IngredientInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
