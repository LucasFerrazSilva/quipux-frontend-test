import { Component } from '@angular/core';
import { ListsService } from './lists.service';
import { Playlist } from './Playlist';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {

  playlists: Playlist[] = [];

  constructor(private service: ListsService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.service.listPlaylist().subscribe(data => this.playlists = data);
  }

}
