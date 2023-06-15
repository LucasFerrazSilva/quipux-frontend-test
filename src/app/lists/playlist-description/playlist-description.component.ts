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

  nome: string | undefined;
  playlist: Playlist | undefined;
  displayedColumns = ['titulo', 'artista', 'album', 'ano', 'genero'];
  
  constructor(private route: ActivatedRoute, private service: ListsService) {}

  ngOnInit() {
    this.getPlaylistDescription();
  }

  getPlaylistDescription() {
    this.nome = this.route.snapshot.paramMap.get('nome') || undefined;
    this.service.getPlaylistDescription(this.nome).subscribe(data => this.playlist = data);
  }

}
