import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstrumentsRoutingModule } from './instruments-routing/instruments-routing.module';
import { MusicInstrumentsComponent } from './musicinstruments/musicinstruments.component';

@NgModule({
  imports: [
    CommonModule,
    InstrumentsRoutingModule
  ],
  declarations: [ MusicInstrumentsComponent ]
})
export class InstrumentsModule { }
