
exports.up = function(knex, Promise) {
	return knex.schema.createTable('comments', function(table) {
		table.increments('id');
		table.integer('hospital_id');
		table.string('hospital_name');
		table.integer('user_id');
		table.string('user_name');
		table.string('content');
		table.datetime('time');
		table.datetime('deleted_at');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('comments');
};
