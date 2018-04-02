
exports.up = function(knex, Promise) {
	return knex.schema.createTable('hospitals', function(table) {
		table.increments('id');
		table.string('name');
		table.integer('location_id');
		table.datetime('deleted_at');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('hospitals');
};
