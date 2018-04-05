
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hospitals').del()
    .then(function () {
      // Inserts seed entries
      return knex('hospitals').insert([
        {id: 1, name: 'BV E', location_id: 1, avgRate: 9},
        {id: 2, name: 'BV K', location_id: 2},
        {id: 3, name: 'BV Bach Mai', location_id: 3, avgRate: 5},
		{id: 4, name: 'BV Thanh Nhan', location_id: 4, avgRate: 10},
        {id: 5, name: 'BV Ha Noi', location_id: 5, avgRate:7},
      ]);
    });
};
