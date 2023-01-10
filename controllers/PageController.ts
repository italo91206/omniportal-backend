import { Router, Request, Response } from 'express';
import service from '../services/pageServices';

class PageController {
    public router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    public routes(): void{
        this.router.get("/", async (req: Request, res: Response): Promise<Response> => {
            let data = service.getPage()
            return  res.json(data)
        })
    }
}

export default new PageController().router