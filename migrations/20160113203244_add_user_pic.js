
exports.up = function(knex, Promise) {
  return knex.schema.table('user_login', function(table){
    table.string('user_image');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('user_login', function(table){
    table.dropColumn('user_image');
  })
};
