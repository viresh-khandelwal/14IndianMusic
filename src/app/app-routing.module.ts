import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrendsComponent } from './latest-trends/trends.component';

@NgModule({
  imports:[
    RouterModule.forRoot([
           {path: 'accounts', loadChildren: 'app/accounts/accounts.module#AccountsModule'},
           {path: 'musicians-and-songs', loadChildren: 'app/musicians-and-songs/musicians-and-songs.module#MusiciansAndSongsModule'},
           {path: 'instruments', loadChildren: 'app/instruments/instruments.module#InstrumentsModule'},
           {path: 'latest-trends', component: TrendsComponent},
           {path: '', component: HomeComponent},
    ])  
  ],
  exports:[RouterModule]
})
export class AppRoutingModule{}