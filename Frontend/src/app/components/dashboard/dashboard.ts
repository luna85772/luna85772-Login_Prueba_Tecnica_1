import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Departamentos } from '../departamentos/departamentos';
import { Empleados } from '../empleados/empleados';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, Departamentos, Empleados],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent implements OnInit {
  departamentos: any[] = [];
  empleados: any[] = [];

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    // Datos simulados
    this.departamentos = [
      { _id: '1', nombre: 'IT' },
      { _id: '2', nombre: 'Recursos Humanos' },
      { _id: '3', nombre: 'Ventas' },
    ];
    this.empleados = [
      { _id: '1', nombre: 'Juan', apellido: 'Pérez', departamentoId: '1' },
      { _id: '2', nombre: 'María', apellido: 'García', departamentoId: '2' },
    ];
  }

  getEmpleadosPorDepto(deptoId: string | undefined) {
    return this.empleados.filter(e => e.departamentoId === deptoId);
  }
}
