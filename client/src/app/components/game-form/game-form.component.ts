import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/Game';
import { GamesService } from '../../services/game.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  game:Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  }

  constructor(private gameservice:GamesService, private router:Router ) { }

  ngOnInit() {
  }

  saveGame(){
    this.gameservice.saveGame(this.game)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/games'])
        },
        err => console.error(err)
      )
  }

}
