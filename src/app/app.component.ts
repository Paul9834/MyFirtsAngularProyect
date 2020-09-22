import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirtsAngularProyect';
  nombre = 'Paul9834';

  saludar() {
    console.log('Nombre', this.nombre);
    alert(this.nombre);
  }
}
