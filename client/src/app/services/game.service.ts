import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  API_URL: 'http://localhost:3000/api/games'
  constructor(private http:HttpClient ) {}

  //Retorna todos lo juegos almacenados
  getGames(){
    return this.http.get(`${this.API_URL}/games`);
  }

  //Retorna un solo juego
  getGame(id:string ){
    return this.http.get(`${this.API_URL}/games/${id}`);
  }
  //Guarda un juego con la interface creada en el modelo
  saveGame(game: Game){
    return this.http.post(`${this.API_URL}/games`,game);
  }
  //Borrando un juego
  deleteGame(id:string){
    return this.http.delete(`${this.API_URL}/games/${id}`);
  }
  //Actualizando
  updateGame(id:string,uptadedGame:Game){
    return this.http.put(`${this.API_URL}/games/${id}`, this.updateGame)
  }
}
