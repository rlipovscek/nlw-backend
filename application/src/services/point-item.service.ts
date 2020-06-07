import PointItemRepository from '../repository/point-item.repository';
import { PointItem } from '../models/point-item.models';
import { HttpError } from '../errors/http.error';

class PointItemService {
    async findByPointId(pointId: number): Promise<Array<PointItem>> {
        if (!pointId) {
            throw new HttpError('Invalid pointId, verify your request and retry');
        }

        const pointItems: Array<PointItem> = await PointItemRepository.findAllByPointId(pointId);
        return pointItems;
    }
}

export default new PointItemService();