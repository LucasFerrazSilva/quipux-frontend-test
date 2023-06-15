import { Component } from '@angular/core';
import { ListsService } from './lists.service';
import { Playlist } from './Playlist';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [AuthService]
})
export class ListsComponent {

  playlists: Playlist[] = [];
  displayedColumns = ['nome', 'descricao', 'acoes'];

  constructor(private service: ListsService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.service.listPlaylist().subscribe(data => this.playlists = data);
  }

  onDelete(playlist: Playlist) {
    this.service.delete(playlist.nome).subscribe(() => this.getHeroes());
  }

}
