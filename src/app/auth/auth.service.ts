import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from './Token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  getToken() {
    const token = sessionStorage.getItem('token');

    if (!token)
      this.getNewToken();
  }

  getNewToken() {
    const req = this.http.post<Token>("http://localhost:8080/login", {"login": "ADMIN", "password": "ADMIN"});
    req.subscribe(data => sessionStorage.setItem('token', data.token));
  }

}
