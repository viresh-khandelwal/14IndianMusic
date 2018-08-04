import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendsComponent } from './trends.component';
import { LatestTrendsRoutingModule } from './latest-trends-routing/latest-trends-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LatestTrendsRoutingModule
    ],
  declarations: [TrendsComponent]
})
export class LatestTrendsModule { }
