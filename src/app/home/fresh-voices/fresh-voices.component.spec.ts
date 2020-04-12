import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshVoicesComponent } from './fresh-voices.component';

describe('FreshVoicesComponent', () => {
  let component: FreshVoicesComponent;
  let fixture: ComponentFixture<FreshVoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshVoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshVoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
