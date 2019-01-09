import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/Game';
import { GamesService } from '../../services/game.service';
import { Router,ActivatedRoute } from '@angular/router';



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

  edit:boolean = false;

  constructor(private gameservice:GamesService, private router:Router, private activatedroute:ActivatedRoute ) { }

  ngOnInit() {
    const params = this.activatedroute.snapshot.params
    if(params.id){
      this.gameservice.getGame(params.id)
        .subscribe(
          res =>{
              console.log(res)
              this.game = res;
              this.edit = true;
          },
          err => {
            console.error(err)
          }
        )
    }
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

  updateGame(){
    delete this.game.created_at;
    this.gameservice.updateGame(this.game.id, this.game)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/games']);
        },
        err => {
          console.error(err)
        }
      )
  }

}
