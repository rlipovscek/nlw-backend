import Knex from 'knex';
import path from 'path';

const connection = Knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, '..', '..', 'resources', 'database', 'database.sqlite')
    },
    useNullAsDefault: true

});

export default connection;