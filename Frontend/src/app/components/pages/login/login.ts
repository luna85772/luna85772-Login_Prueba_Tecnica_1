import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importante para [(ngModel)]
import { AuthService } from '../../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Agregamos FormsModule aquí
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  // Datos que el usuario escribirá
  user = {
    email: '',
    password: ''
  };

  private authService = inject(AuthService);
  private router = inject(Router);

  onLogin() {
    this.authService.login(this.user).subscribe({
      next: (res: any) => {
        console.log('¡Login exitoso!', res);
        localStorage.setItem('token', res.token); // Guardamos el JWT
        this.router.navigate(['/products']); // Vamos a productos
      },
      error: (err) => {
        alert('Error al iniciar sesión: ' + err.error.message);
      }
    });
  }
}
