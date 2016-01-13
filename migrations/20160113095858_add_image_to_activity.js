
exports.up = function(knex, Promise) {
  return knex.schema.table('activity', function(table){
    table.string('activity_image');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('child', function(table){
    table.dropColumn('activity_image');
  })
};
