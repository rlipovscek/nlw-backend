import path from 'path';
import { Config } from 'knex';

const development: Config = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, '..', '..', 'resources', 'database', 'database.sqlite')
    },
    migrations: {
        tableName: 'migration_history',
        directory: path.resolve(__dirname, '..', '..', 'resources', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, '..', '..', 'resources', 'database', 'seeds')
    },
    useNullAsDefault: true,
}

console.log(development.connection?.toString())

const production: Config = {};

module.exports = development;