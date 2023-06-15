import { Component } from '@angular/core';
import { ListsService } from '../lists.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Playlist } from '../Playlist';
import { Router } from '@angular/router';
import { ValidationError } from './ValidationError';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent {

  errors: ValidationError[] = [];

  form = this.formBuilder.group({
    nome: ['', Validators.required],
    descricao: ['', Validators.required],
    musicas: [[]]
  });

  constructor(private service: ListsService, private formBuilder: FormBuilder, private router: Router) {}

  onSubmit() {
    const formValues = this.form.value;
    const playlist: Playlist = {nome: formValues.nome || '', descricao: formValues.descricao || ''};

    this.service.create(playlist).subscribe({
      next: data => this.router.navigate(['/']),
      error: err => this.handleError(err.error)
    });
  }

  private handleError(error: ValidationError | ValidationError[]) {
    if (!Array.isArray(error))
      this.errors = [error];
    else    
      this.errors = error;
  }

}
