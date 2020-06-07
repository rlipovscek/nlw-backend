import knex from '../database/connection';
import { PointItem } from '../models/point-item.models';

class PointItemRepository {
    private readonly tableName = 'point_item';
    async registry(model: PointItem): Promise<number> {
        const ids = await knex(this.tableName).insert(model);
        return ids[0];
    }

    async findAllByPointId(pointId: number): Promise<Array<PointItem>> {
        const pointItems: Array<PointItem> =
            await knex(this.tableName).select('point_id').select('items_id');
        return pointItems;
    }
}

export default new PointItemRepository();