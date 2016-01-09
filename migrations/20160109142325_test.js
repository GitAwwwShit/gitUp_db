
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('user_type', function (table) {
    table.increments();
    table.string('type');
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_type')
};
