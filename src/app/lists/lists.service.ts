import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Playlist } from './Playlist';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  listPlaylist(): Observable<Playlist[]> {
    const headers = this.buildHeadersWithToken();
    return this.http.get<Playlist[]>("http://localhost:8080/lists", {headers}).pipe(catchError(error => this.handleError(error)));
  }

  getPlaylistDescription(nome: string | undefined): Observable<Playlist> {
    const headers = this.buildHeadersWithToken();
    return this.http.get<Playlist>(`http://localhost:8080/lists/${nome}`, {headers}).pipe(catchError(error => this.handleError(error)));
  }

  delete(nome: string | null) {
    const headers = this.buildHeadersWithToken();
    const req = this.http.delete(`http://localhost:8080/lists/${nome}`, {headers}).pipe(catchError(error => this.handleError(error)));

    return req;
  }

  private buildHeadersWithToken() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return headers;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status == 403) {
      this.authService.getNewToken();
      return throwError(() => new Error("Token invalido ou expirado. Tente novamente."));
    }

    if (error.status == 404) {
      return throwError(() => new Error("Nenhuma playlist encontrada para o nome informado."));
    }
    
    return throwError(() => error);
  }

}
