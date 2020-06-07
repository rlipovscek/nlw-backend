import knex from '../database/connection';
import Point from '../models/point.models';
import { Transaction } from 'knex';
import PointItemRepository from './point-item.repository';
import { PointItem } from '../models/point-item.models';
import { HttpError } from '../errors/http.error';

class PointRepository {
    private readonly tableName = 'point';
    private readonly newImage = '';

    async findById(id: number): Promise<Point> {
        const points: Array<Point> = await knex(this.tableName)
            .select('id')
            .select('image')
            .select('name')
            .select('email')
            .select('whatsapp')
            .select('latitude')
            .select('longitude')
            .select('city')
            .select('uf')
            .where({ id });
        return points[0];
    }

    async findAll(): Promise<Array<Point>> {
        const points: Array<Point> = await knex(this.tableName).select('id')
            .select('image')
            .select('name')
            .select('email')
            .select('whatsapp')
            .select('latitude')
            .select('longitude')
            .select('city')
            .select('uf');
        return points;
    }

    async findByName(name: string): Promise<Point> {
        const points: Array<Point> = await knex(this.tableName)
            .select('id')
            .select('image')
            .select('name')
            .select('email')
            .select('whatsapp')
            .select('latitude')
            .select('longitude')
            .select('city')
            .select('uf')
            .where({ name });
        return points[0];
    }

    async findByWhatsApp(whatsapp: string): Promise<Point> {
        const points: Array<Point> = await knex(this.tableName)
            .select('id')
            .select('image')
            .select('name')
            .select('email')
            .select('whatsapp')
            .select('latitude')
            .select('longitude')
            .select('city')
            .select('uf')
            .where({ whatsapp });
        return points[0];
    }

    async registry(point: Point): Promise<Point> {
        let transaction: Transaction | null = null;
        try {
            transaction = await knex.transaction();
            const model = Object.assign({}, point);
            const items: Array<number> = (<Array<number>>model.items);
            delete model.items;

            let pointId = (await transaction(this.tableName).insert({ image: this.newImage, ...model }))[0];
            pointId = pointId;
            items.forEach(item => {
                const pointItem: PointItem = {
                    items_id: item,
                    point_id: pointId
                }
                PointItemRepository.registry(pointItem);
            })

            transaction.commit();

            return { id: pointId, ...point };

        } catch (error) {
            if (transaction) {
                transaction.rollback();
            }
            throw new HttpError(error.message, 400);
        }

    }

}

export default new PointRepository();