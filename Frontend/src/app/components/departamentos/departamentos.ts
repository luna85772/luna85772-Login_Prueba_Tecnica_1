import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-departamentos',
  imports: [CommonModule, FormsModule],
  templateUrl: './departamentos.html',
  styleUrl: './departamentos.css',
})
export class Departamentos implements OnInit {
  nuevoDepto: any = { nombre: '' };
  departamentos: any[] = [];

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    // Simulación de datos - Reemplazar con llamadas a servicio
    this.departamentos = [
      { _id: '1', nombre: 'IT' },
      { _id: '2', nombre: 'Recursos Humanos' },
      { _id: '3', nombre: 'Ventas' },
    ];
  }

  agregarDepto(): void {
    if (this.nuevoDepto.nombre.trim()) {
      const depto = { ...this.nuevoDepto, _id: Date.now().toString() };
      this.departamentos.push(depto);
      this.nuevoDepto = { nombre: '' };
      console.log('Departamento agregado:', depto);
    }
  }

  eliminar(id: string): void {
    this.departamentos = this.departamentos.filter(d => d._id !== id);
    console.log('Departamento eliminado:', id);
  }
}
