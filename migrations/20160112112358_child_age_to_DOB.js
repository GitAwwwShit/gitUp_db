
exports.up = function(knex, Promise) {
  return knex.schema.table('child', function(table){
    table.dropColumn('age');
    table.dateTime('dob');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('child', function(table){
    table.dropColumn('dob');
    table.integer('age');
  })
};
