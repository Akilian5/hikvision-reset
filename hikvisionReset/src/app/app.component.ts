import { Component, signal } from '@angular/core';
import { Inicio } from "./components/Inicio/inicio";
import { Navbar } from "./components/NavBar/navbar";
import { Funciona } from "./components/Funciona/funciona";
import { Requisitos } from "./components/Requisitos/requisitos";
import { Contacto } from "./components/contacto/contacto";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    
    Inicio,
    Navbar,
    Funciona,
    Requisitos,
    Contacto,
    Footer
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  protected readonly title = signal('hikvisionReset');
}
