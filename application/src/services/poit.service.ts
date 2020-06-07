import Point from '../models/point.models';
import PointRepository from '../repository/point.repository';
import { HttpError } from '../errors/http.error';
import PoinItemService from './point-item.service';
import ItemService from './item.service';

class PointService {
    async registry(point: Point): Promise<any> {
        if (!point || JSON.stringify(point) === '{}') {
            throw new HttpError('Dont find any poitn to registry', 400);
        }
        const response = await PointRepository.registry(point);
        return response;
    }

    async getItemsFromPoint(point: Point): Promise<Point> {
        const relationsPointItems = await PoinItemService.findByPointId(point.id);
        const itemsIds: Array<number> = relationsPointItems.map(pointItem => pointItem.items_id);
        point.items = await ItemService.findAllIds(itemsIds);

        return point;
    }

    async getItemsFromPointList(points: Array<Point>): Promise<Array<Point>> {
        const formatedList: Array<Point> = [];

        for (const point of points) {
            const pointFormated = await this.getItemsFromPoint(point);
            formatedList.push(pointFormated);
        }

        return formatedList;
    }

    async findAll(): Promise<Array<Point>> {
        let points = await PointRepository.findAll();
        if (points?.length > 0) {
            points = await this.getItemsFromPointList(points);
        }
        return points;
    }

    async findOneById(id: number): Promise<Point | {}> {
        if (!id) {
            throw new HttpError('Invalid id, verify your request', 400);
        }
        let point = await PointRepository.findById(id);
        if (point) {
            point = await this.getItemsFromPoint(point);
            return point;
        } else {
            return {};
        }

    }
}

export default new PointService();