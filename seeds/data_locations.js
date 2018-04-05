
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, lat: 21.028644, long: 105.838511, address: 'Ha Noi'},
        {id: 2, lat: 21.026280, long: 105.835507, address: 'Ha Noi'},
        {id: 3, lat: 21.018265, long: 105.859368, address: 'Ha Noi'},
        {id: 4, lat: 21.004283, long: 105.859068, address: 'Ha Noi'},
        {id: 5, lat: 21.003321, long: 105.839842, address: 'Ha Noi'},
      ]);
    });
};
