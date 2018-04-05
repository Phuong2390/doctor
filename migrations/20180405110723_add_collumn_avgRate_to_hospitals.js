
exports.up = function(knex, Promise) {
  return knex.schema.table('hospitals', function (table) {
      table.float('avgRate')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('hospitals', function (table) {
        table.dropColumn('avgRate')
    })
};
