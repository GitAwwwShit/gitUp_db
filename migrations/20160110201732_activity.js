
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('activity', function(table){
      table.increments('id').primary;
      table.string('activity_name');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('activity')
  ])
};
