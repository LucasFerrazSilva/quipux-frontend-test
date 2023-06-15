import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListsService } from '../lists.service';
import { Playlist } from '../Playlist';

@Component({
  selector: 'app-playlist-description',
  templateUrl: './playlist-description.component.html',
  styleUrls: ['./playlist-description.component.css']
})
export class PlaylistDescriptionComponent {

  playlist: Playlist | undefined;
  displayedColumns = ['titulo', 'artista', 'album', 'ano', 'genero'];
  
  constructor(private route: ActivatedRoute, private service: ListsService) {}

  ngOnInit() {
    this.getPlaylistDescription();
  }

  getPlaylistDescription() {
    const nome = this.route.snapshot.paramMap.get('nome');
    this.service.getPlaylistDescription(nome).subscribe(data => this.playlist = data);
  }

}
