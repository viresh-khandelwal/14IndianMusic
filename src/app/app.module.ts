//angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//project specific modules
import { LatestTrendsModule } from './latest-trends/latest-trends.module';

//compoents
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainNavigationMenuComponent } from './main-navigation-menu/main-navigation-menu.component';
import { FreshVoicesComponent } from './home/fresh-voices/fresh-voices.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavigationMenuComponent,
    FreshVoicesComponent
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
