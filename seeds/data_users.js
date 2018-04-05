
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
		  {id: 1, first_name: 'Dang', last_name: 'Huyen', credential_id: 1},
		  {id: 2, first_name: 'Pham', last_name: 'Viet', credential_id: 2},
		  {id: 3, first_name: 'Ngo', last_name: 'Son', credential_id: 3},
		  {id: 4, first_name: 'Thai', last_name: 'Phuong', credential_id: 4},
	  ]);
    });
};
