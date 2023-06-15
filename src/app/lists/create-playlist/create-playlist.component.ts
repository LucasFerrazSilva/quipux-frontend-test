import { Component } from '@angular/core';
import { ListsService } from '../lists.service';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Playlist } from '../Playlist';
import { Router } from '@angular/router';
import { ValidationError } from './ValidationError';
import { Song } from '../Song';

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
    musicas: this.formBuilder.array([])
  });

  constructor(private service: ListsService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.addMusica();
  }

  onSubmit() {
    const formValues = this.form.value;
    const playlist: Playlist = {nome: formValues.nome || '', descricao: formValues.descricao || '', musicas: formValues.musicas as Song[] };

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

  get musicas(): FormArray {
    return this.form.controls['musicas'] as FormArray;
  }

  get musicasFormArrayControls(): FormGroup[] {
    return this.musicas.controls as FormGroup[];
  }

  addMusica() {
    const songForm = this.formBuilder.group({
      titulo: [''],
      artista: [''],
      album: [''],
      ano: [''],
      genero: ['']
    });

    this.musicas.push(songForm);
  }

  deleteMusica(songIndex: number) {
    this.musicas.removeAt(songIndex);
  }

}
