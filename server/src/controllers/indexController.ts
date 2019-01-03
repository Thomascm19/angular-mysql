
import { Response, Request } from 'express-serve-static-core';

class IndexController {

    public index (req: Request, res: Response){
        res.json({text : '/api/games'})
    } 
 
}

export const indexController = new IndexController();