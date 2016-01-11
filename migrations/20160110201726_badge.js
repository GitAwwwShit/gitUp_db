
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('badge', function(table){
      table.increments('id').primary;
      table.string('title');
      table.string('image');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('badge')
  ])
};
