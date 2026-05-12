import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  login(userData: any) {
    return this.http.post('/api/iniciarSesion', userData);
  }

  register(userData: any) {
    return this.http.post('/api/register', userData);
  }
}
