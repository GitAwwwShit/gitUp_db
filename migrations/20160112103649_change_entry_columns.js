
exports.up = function(knex, Promise) {
  return knex.schema.table('entry', function(table){
    table.dropColumn('child_id');
    table.integer('child_goal_id')
      .references('id')
      .inTable('child_goal');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('entry', function(table){
    table.dropColumn('child_goal_id');
    table.integer('child_id')
      .references('id')
      .inTable('child');
  })
};
