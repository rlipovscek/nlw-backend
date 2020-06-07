import express, {Application} from 'express';
import path from 'path';
import internalRoutes from  './config/router.config';

const PORT = process.env.port || 3333;

const app: Application = express();

app.use(express.json());
app.use('/resources/images', express.static(path.resolve(__dirname, '..', 'resources', 'images')));
app.use(internalRoutes);

app.listen(PORT, () => console.log("Ohhhhh, odeteeee... ta me ascutando?"))