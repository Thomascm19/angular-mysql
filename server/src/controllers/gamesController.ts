import { Response, Request } from 'express-serve-static-core';
import pool from '../routes/database'

class GamesController {

    public async list (req: Request, res: Response){
        const games = await pool.query('SELECT * FROM games');
        res.json(games)
    }
    
    
    public async getOne(req: Request, res:Response):Promise<any>{
        const {id} = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = ?',[id])
        if(games.length > 0 ){
            return res.json(games[0])
        }
        res.status(404).json({text: "A game not found"})
    }


    public async create (req: Request, res:Response): Promise<void>{
       await pool.query('INSERT INTO games set ?',[req.body])   
        res.json({message: 'Game Save'})
    }



    public async delete (req: Request, res:Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM games WHERE id = ?',[id])
        res.json({message: "A game was delete"})
    }


    public async update(req: Request, res: Response):Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE FROM games set ? WHERE id = ?',[req.body,id])
        res.json({message: "A game was updated"})
    }
 
}

const gamesController = new GamesController();

export default gamesController;