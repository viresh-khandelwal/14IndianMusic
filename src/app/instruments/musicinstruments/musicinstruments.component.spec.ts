import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicinstrumentsComponent } from './musicinstruments.component';

describe('MusicinstrumentsComponent', () => {
  let component: MusicinstrumentsComponent;
  let fixture: ComponentFixture<MusicinstrumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicinstrumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicinstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
