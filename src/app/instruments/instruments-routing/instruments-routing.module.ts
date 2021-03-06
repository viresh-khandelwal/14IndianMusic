import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { MusicInstrumentsComponent } from '../musicinstruments/musicinstruments.component';

let routes: Routes = [
  {path: '' , component: MusicInstrumentsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InstrumentsRoutingModule { }
