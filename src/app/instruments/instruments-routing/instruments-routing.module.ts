import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { MusicinstrumentsComponent } from '../musicinstruments/musicinstruments.component';

let routes: Routes = [
  {path: '' , component: MusicinstrumentsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InstrumentsRoutingModule { }
