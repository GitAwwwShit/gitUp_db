
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('goal', function(table){
      table.increments('id').primary;
      table.integer('minute_amount')
      table.integer('activity_id')
        .references('id')
        .inTable('activity');
      table.integer('badge_id')
        .references('id')
        .inTable('badge');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('goal')
  ])
};
