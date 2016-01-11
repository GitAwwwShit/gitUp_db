
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('child_goal', function(table){
      table.increments('id').primary;
      table.integer('child_id')
        .references('id')
        .inTable('child');
      table.integer('goal_id')
        .references('id')
        .inTable('goal');
      table.integer('reward_id')
        .references('id')
        .inTable('reward');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('child_goal')
  ])
};
