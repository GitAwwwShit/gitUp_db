
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('user_login', function(table){
      table.increments('id').primary;
      table.string('username');
      table.string('auth_id');
      table.integer('user_type_id')
        .references('id')
        .inTable('user_type');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user_login')
  ])
};
