import { Response, Request } from 'express-serve-static-core';
import pool from '../routes/database'

class GamesController {

    public index (req: Request, res: Response){
        pool.query('DESCRIBE games')
        res.json('games')
    } 
 
}

const gamesController = new GamesController();

export default gamesController;