
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('reward', function(table){
      table.increments('id').primary;
      table.string('type');
      table.dateTime('date_time');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('reward')
  ])
};
