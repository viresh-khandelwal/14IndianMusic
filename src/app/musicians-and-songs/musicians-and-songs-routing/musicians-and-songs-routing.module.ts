import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MusiciansComponent } from '../musicians/musicians.component';
import { SongsComponent } from '../songs/songs.component';

let routes: Routes = [
  {path: 'musicians' , component: MusiciansComponent},
  {path: 'songs' , component: SongsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MusiciansAndSongsRoutingModule { }
