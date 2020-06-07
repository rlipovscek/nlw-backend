import knex from '../database/connection';
import { Item } from '../models/item.model';

const TABLE = 'item';

class ItemRepository {
    async findAll(): Promise<Array<Item>> {
        return await knex(TABLE).select('title').select('image');
    }

    async findAllByIds(ids: Array<number>): Promise<Array<Item>> {
        return await knex(TABLE).select('title').select('image')
            .whereIn('id', ids);
    }

    async findOneById(id: number): Promise<Array<Item>> {
        return await knex(TABLE).select('title').select('image')
            .where('id', id);
    }
}

export default new ItemRepository();