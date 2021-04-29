import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*styleUrls: ['./app.component.css']*/
})
export class AppComponent {
  title = 'angularaulas';
  nome = 'boni';
  idade = 99;
  nomes = [ 'ana', 'maria', 'holaa'];
  nomePrincipal = this.nomes[0];
}
