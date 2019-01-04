import { Response, Request } from 'express-serve-static-core';
import pool from '../routes/database'

class GamesController {

    public async list (req: Request, res: Response){
        const games = await pool.query('SELECT * FROM games');
        res.json(games)
    } 
    public getOne(req: Request, res:Response){
        res.json({text: 'Listing One'+ req.params.id})
    }
    public async create (req: Request, res:Response): Promise<void>{
       await pool.query('INSERT INTO games set ?',[req.body])   
        res.json({message: 'Game Save'})
    }

    public delete (req: Request, res:Response){
        res.json({text: 'Deleting a game'+ req.params.id})
    }
    public update(req: Request, res: Response){
        res.json({text: 'Updating a game'+ req.params.id})
    }
 
}

const gamesController = new GamesController();

export default gamesController;