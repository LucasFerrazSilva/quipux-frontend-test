import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { PlaylistDescriptionComponent } from './lists/playlist-description/playlist-description.component';

const routes: Routes = [
  { path: '', component: ListsComponent },
  { path: 'lists/:nome', component: PlaylistDescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
