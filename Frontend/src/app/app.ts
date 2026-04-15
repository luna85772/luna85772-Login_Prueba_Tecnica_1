import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from  './components/shared/header/header';
import { Footer } from  './components/shared/footer/footer';
import { Navigation } from './components/shared/navigation/navigation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Navigation],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
}
