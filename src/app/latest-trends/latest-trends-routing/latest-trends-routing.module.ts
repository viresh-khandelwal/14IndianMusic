import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { TrendsComponent } from '../trends.component';

let routes: Routes = [
  {path: '' , component: TrendsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LatestTrendsRoutingModule { }
