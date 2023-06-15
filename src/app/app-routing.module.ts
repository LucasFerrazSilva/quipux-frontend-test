import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { PlaylistDescriptionComponent } from './lists/playlist-description/playlist-description.component';
import { CreatePlaylistComponent } from './lists/create-playlist/create-playlist.component';

const routes: Routes = [
  { path: '', component: ListsComponent },
  { path: 'lists/:nome', component: PlaylistDescriptionComponent },
  { path: 'new-playlist', component: CreatePlaylistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
