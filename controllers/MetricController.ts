import { Router, Request, Response } from 'express';
import service from '../services/metricServices';

class MetricController {

    public router: Router;

    constructor(){
        this.router = Router();
        this.routes();   
    }

    public routes(): void{
        this.router.get("/", async (req: Request, res: Response): Promise<Response> => {
            let data = service.getSimpleMetrics();
            return res.json(data)
        })

        this.router.post("/", async(req: Request, res: Response): Promise<Response> => {
            let data = "POST - Hello world";
            return res.json(data)
        })
    }
}

export default new MetricController().router