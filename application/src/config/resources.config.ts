const PORT = process.env.port || 3333;
const ADDRESS: string = process.env.ADDRESS || `http://localhost:${PORT}`;
import itemsController from '../controllers/items.controller';
import PointController from '../controllers/point.controller';

interface Resource {
    name: string,
    path: string,
    fullPath: string,
    method: any,
    type: 'get' | 'post'
}

const resources: Array<Resource> = [
    {
        fullPath: `${ADDRESS}/items/`,
        method: itemsController.findAll,
        name: 'images',
        path: '/items/',
        type: 'get'
    },
    {
        fullPath: `${ADDRESS}/points`,
        method: PointController.registry,
        name: 'points',
        path: '/points',
        type: 'post'
    },
    {
        fullPath: `${ADDRESS}/points`,
        method: PointController.findAll,
        name: 'points',
        path: '/points',
        type: 'get'
    },
    {
        fullPath: `${ADDRESS}/points/:id`,
        method: PointController.findById,
        name: 'points',
        path: '/points/:id',
        type: 'get'
    }
];

export default resources;
