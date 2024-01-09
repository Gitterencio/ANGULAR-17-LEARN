import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = "ProyectoCebollaDevs";
  isLoggedInn = false;
  favGame='';

  greet(){
    alert("hola!!!")
  }

  getFavorite(gameName:string){
    this.favGame = gameName;
  }
}