import { Component } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {

  game: string [] = ["Call of Duty: Mobile", "Mobile Legends", "Black Bus"];
  newGame: string = "";

  addGame(){
    if(this.newGame.trim()){
      this.game.push(this.newGame);
      this.newGame = '';
    }
  }
  deleteGame(game:string){
    this.game = this.game.filter( g => g !== game);  //delete
  }
}
