
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('credentials').del()
    .then(function () {
      // Inserts seed entries
      return knex('credentials').insert([
        {id: 1, email: 'huyen@gmail.com', password:'$2a$10$BiYSOtiMudG/NcY5yzCITOtyeINnBslIN3mD7drxOgDeGagmT7vV2'},
        {id: 2, email: 'viet@gmail.com', password: '$2a$10$8IriquGmrpXQciF/BWP6o.NxENNFP122awsKeiWmLnTMDM5t4fNie'},
        {id: 3, email: 'son@gmail.com', password: '$2a$10$BXClEzT6iZApUf3nhyWhxO6/86CQSUieTrsOd5fvlVBiRjHF2VoRa'},
		{id: 4, email: 'phuong@gmail.com', password: '$2a$10$WkDGk3xWjWP8yoOjbu3kTO6wgWrN9vyJYRhwxYHMu2YlUljA154d.'},
      ]);
    });
};
