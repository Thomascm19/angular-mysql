import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/game.service';



@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  constructor(private gameService:GamesService) { }

  ngOnInit() {
    this.gameService.getGames().subscribe(
      res => console.log(res),
      err => console.log(err)
   )

  }

}
