import { Component, OnInit,HostBinding } from '@angular/core';
import { GamesService } from '../../services/game.service';



@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

    @HostBinding('class') clases = 'row'

  games:any = []

  constructor(private gameService:GamesService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames(){
    this.gameService.getGames().subscribe(
      res => {
          this.games = res
      },
      err => console.log(err)
   )
  }
  deleteGame(id:string){
    this.gameService.deleteGame(id).subscribe(
      res => {
        console.log(res);
        this.getGames();
      },
      err => {
        console.error(err)
      }
    )
  }
  editGame(id:string){
    console.log(id)
  }

}
