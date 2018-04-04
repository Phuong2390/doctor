
exports.up = function(knex, Promise) {
	return knex.schema.createTable('rates', function(table) {
		table.increments('id');
		table.integer('hospital_id');
		table.string('hospital_name');
		table.integer('user_id');
		table.string('user_name');
		table.integer('score');
		table.datetime('deleted_at');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('rates');
};
