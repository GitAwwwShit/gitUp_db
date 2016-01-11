
exports.up = function(knex, Promise) {
  return knex.schema.table('user_login', function(table){
    table.string('provider');
    table.integer('times_visited');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('user_login', function(table){
    table.dropColumn('provider');
    table.dropColumn('times_visited');
  })
};
