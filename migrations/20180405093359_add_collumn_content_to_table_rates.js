
exports.up = function(knex, Promise) {
  return knex.schema.table('rates', function (table) {
      table.string('content')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('rates', function (table) {
      table.dropColumn('content')
  })
};
