
exports.up = function(knex, Promise) {
    return knex.schema.table('rates', function (table) {
        table.dateTime('time')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('rates', function (table) {
        table.dropColumn('time')
    })
};
