import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  // Objeto para capturar los datos del formulario
  user = {
    name: '',
    email: '',
    password: ''
  };

  private authService = inject(AuthService);
  private router = inject(Router);

  onRegister() {
    this.authService.register(this.user).subscribe({
      next: (res: any) => {
        alert('¡Usuario creado con éxito!');
        this.router.navigate(['/login']); // Después de registrarse, lo mandamos a loguearse
      },
      error: (err) => {
        alert('Error al registrar: ' + (err.error.message || 'Inténtalo de nuevo'));
      }
    });
  }
}
