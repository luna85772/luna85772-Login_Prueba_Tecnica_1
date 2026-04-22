import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  imports: [CommonModule, FormsModule],
  templateUrl: './empleados.html',
  styleUrl: './empleados.css',
})
export class Empleados implements OnInit {
  empleado: any = { nombre: '', apellido: '', departamentoId: '' };
  empleados: any[] = [];
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
    this.empleados = [];
  }

  guardarEmpleado(): void {
    if (this.empleado.nombre && this.empleado.apellido && this.empleado.departamentoId) {
      const nuevoEmpleado = { ...this.empleado, _id: Date.now().toString() };
      this.empleados.push(nuevoEmpleado);
      this.empleado = { nombre: '', apellido: '', departamentoId: '' };
      console.log('Empleado guardado:', nuevoEmpleado);
    }
  }

  eliminar(id: string): void {
    this.empleados = this.empleados.filter(emp => emp._id !== id);
    console.log('Empleado eliminado:', id);
  }
}
