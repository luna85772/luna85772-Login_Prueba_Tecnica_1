import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { ProductsComponent } from './components/pages/products/products';
import { LoginComponent } from './components/pages/login/login';
import { RegisterComponent } from './components/pages/register/register';
import { PageNotFound } from './components/pages/page-not-found/page-not-found';
import { DashboardComponent } from './components/dashboard/dashboard';

export const routes: Routes = [
  {path : "", component: Home, title: "Inicio"},
  { path: "login", component: LoginComponent, title: "Iniciar Sesión" },
  { path: "register", component: RegisterComponent, title: "Registro" },
  {path : "inicio", component : Home, title : "Inicio"},
  {path : "products", component : ProductsComponent, title : "Productos"},
  {path : "dashboard", component : DashboardComponent, title : "Dashboard"},
  {path : "**", component : PageNotFound, title : "Página no encontrada"}
];
