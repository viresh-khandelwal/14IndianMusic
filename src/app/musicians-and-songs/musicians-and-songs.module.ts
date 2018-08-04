import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusiciansComponent } from './musicians/musicians.component';
import { SongsComponent } from './songs/songs.component';
import { MusiciansAndSongsRoutingModule } from './musicians-and-songs-routing/musicians-and-songs-routing.module'

@NgModule({
  imports: [
    CommonModule,
    MusiciansAndSongsRoutingModule
  ],
  declarations: [MusiciansComponent, SongsComponent]
})
export class MusiciansAndSongsModule { }
