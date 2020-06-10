import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixingTableComponent } from './mixing-table.component';

describe('MixingTableComponent', () => {
  let component: MixingTableComponent;
  let fixture: ComponentFixture<MixingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
