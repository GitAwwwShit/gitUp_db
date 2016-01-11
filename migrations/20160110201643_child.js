
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('child', function(table){
      table.increments('id').primary;
      table.string('first_name');
      table.string('gender');
      table.integer('age')
      table.integer('user_login_id')
        .references('id')
        .inTable('user_login');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('child')
  ])
};
