import { Request, Response } from 'express';
import PointService from '../services/poit.service';
import ResolvePromise from '../decorators/resolve-promise';

class PointController {

    @ResolvePromise()
    async registry(request: Request, response: Response) {
        const respo = await PointService.registry(request.body);
        return response.json(respo);
    }

    @ResolvePromise()
    async findAll(request: Request, response: Response) {
        const respo = await PointService.findAll();
        return response.json(respo);
    }

    @ResolvePromise()
    async findById(request: Request, response: Response) {
        const respo = await PointService.findOneById(Number(request?.params?.id));
        return response.json(respo);
    }
}

export default new PointController();