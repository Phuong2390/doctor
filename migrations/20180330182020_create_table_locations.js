
exports.up = function(knex, Promise) {
	return knex.schema.createTable('locations', function(table) {
		table.increments('id');
		table.float('lat');
		table.float('long');
		table.text('address');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('locations');
};
