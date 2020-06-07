import { Request, Response } from 'express';
import itemService from '../services/item.service';
import ResolvePromise from '../decorators/resolve-promise';


class itemsController {
    @ResolvePromise()
    async findAll(request: Request, response: Response) {
        const items = await itemService.findAll();
        return response.json(items);
    }
}

export default new itemsController();