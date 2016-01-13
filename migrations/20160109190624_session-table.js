
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('session', function (table) {
    table.string('sid').notNullable().primary(),
    table.json('sess').notNullable(),
    table.timestamp('expire', true).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('session')
};
