import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private API_URL = 'http://localhost:3000/users'; // Tu ruta de Backend

  login(userData: any) {
    return this.http.post(`${this.API_URL}/login`, userData);
  }

  register(userData: any) {
    return this.http.post(`${this.API_URL}/register`, userData);
  }
}
