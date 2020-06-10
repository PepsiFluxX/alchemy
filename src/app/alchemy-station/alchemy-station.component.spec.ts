import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlchemyStationComponent } from './alchemy-station.component';

describe('AlchemyStationComponent', () => {
  let component: AlchemyStationComponent;
  let fixture: ComponentFixture<AlchemyStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlchemyStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlchemyStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
