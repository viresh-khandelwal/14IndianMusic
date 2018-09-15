//angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//project specific modules
import { LatestTrendsModule } from './latest-trends/latest-trends.module';

//compoents
import { AppComponent } from './app-root/app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LatestTrendsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
