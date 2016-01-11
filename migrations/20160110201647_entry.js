exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('entry', function(table){
      table.increments('id').primary;
      table.integer('amount');
      table.dateTime('date_time')
      table.integer('child_id')
        .references('id')
        .inTable('child');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('entry')
  ])
};
