
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rates').del()
    .then(function () {
      // Inserts seed entries
      return knex('rates').insert([
        {id: 1, hospital_id : 1, hospital_name: 'BV E', user_id: 1, user_name: 'Dang Huyen', score: 9, content:'BV tot'},
        {id: 2, hospital_id : 1, hospital_name: 'BV E', user_id: 2, user_name: 'Pham Viet', score: 10, content:'BV tot'},
		{id: 3, hospital_id : 1, hospital_name: 'BV E', user_id: 3, user_name: 'Ngo Son', score: 8, content:'BV tot'},
		{id: 4, hospital_id : 2, hospital_name: 'BV K', user_id: 3, user_name: 'Ngo Son', score: 8, content:'BV tot'},
		{id: 5, hospital_id : 4, hospital_name: 'BV Thanh Nhan', user_id: 4, user_name: 'Thai Phuong', score: 8, content:'BV tot'},
        {id: 6, hospital_id : 5, hospital_name: 'BV Ha Noi', user_id: 2, user_name: 'Pham Viet', score: 8, content:'BV tot'},

	  ]);
    });
};
