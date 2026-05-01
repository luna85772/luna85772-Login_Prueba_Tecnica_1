import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private API_URL = 'http://13.59.196.178:9000';

  login(userData: any) {
    return this.http.post(`${this.API_URL}/iniciarSesion`, userData);
  }

  register(userData: any) {
    return this.http.post(`${this.API_URL}/register`, userData);
  }
}
