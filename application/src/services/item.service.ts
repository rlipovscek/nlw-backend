import ItemRepository from '../repository/item.repository';
import { ResponseItem } from '../models/item-response.model';
import { Item } from '../models/item.model';

class ItemService {

    formatItem(items: Array<Item>): Array<ResponseItem> {

        return items.map(item => {
            const formated: ResponseItem = {
                id: item.id,
                imagePath: `http://localhost:3333/resources/images/${item.image}`,
                title: item.title
            };

            return formated;
        })
    }

    async findAll(): Promise<Array<ResponseItem>> {
        const items = await ItemRepository.findAll();
        return this.formatItem(items);
    }

    async findAllIds(ids: Array<number>): Promise<Array<ResponseItem>> {
        const items = await ItemRepository.findAllByIds(ids);
        return this.formatItem(items);
    }
}

export default new ItemService();