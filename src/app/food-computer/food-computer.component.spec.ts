import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodComputerComponent } from './food-computer.component';

describe('FoodComputerComponent', () => {
  let component: FoodComputerComponent;
  let fixture: ComponentFixture<FoodComputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodComputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
