import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient);
  private API_URL = '/api/users';

  constructor() { }

  // Registro de usuario
  register(userData: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, userData);
  }

  // Inicio de sesión
  login(userData: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, userData);
  }

  // Obtener todos los usuarios
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }
}
