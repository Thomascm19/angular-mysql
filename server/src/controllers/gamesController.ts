import { Response, Request } from 'express-serve-static-core';
import pool from '../routes/database'

class GamesController {

    public index (req: Request, res: Response){
        pool.query('DESCRIBE games')
        res.json('games')
    } 
    public create (req: Request, res:Response){
        res.json({text: 'Create a game'})
    }

    public delete (req: Request, res:Response){
        res.json({text: 'Deleting a game'})
    }
    public update(req: Request, res: Response){
        res.json({text: 'Updating a game'})
    }
 
}

const gamesController = new GamesController();

export default gamesController;