
exports.up = function(knex, Promise) {
	return knex.schema.createTable('credentials', function(table) {
		table.increments('id');
		table.string('email');
		table.string('password');
		table.datetime('deleted_at');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('credentials');
};
