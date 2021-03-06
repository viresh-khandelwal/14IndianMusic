import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicInstrumentsComponent } from './musicinstruments.component';

describe('MusicinstrumentsComponent', () => {
  let component: MusicInstrumentsComponent;
  let fixture: ComponentFixture<MusicInstrumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicInstrumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
