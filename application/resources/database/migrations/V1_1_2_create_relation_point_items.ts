import Knex, { Migration } from 'knex';
const TABLE_NAME = 'point_item';

export async function up(knex: Knex) {
    return knex.schema.createTable(TABLE_NAME, table => {
        table.increments('id').primary();
        table.integer('point_id').notNullable()
              .references('id')
              .inTable('point')
              .onDelete('CASCADE');
        table.string('items_id')
             .notNullable()
             .references('id')
             .inTable('item');
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable(TABLE_NAME);
}

