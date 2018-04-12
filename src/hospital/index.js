const HospitalRepository = require('./hospital-repository');
const HospitalFactory = require('./hospital-factory');
const HospitalSearcher = require('./search-services/searcher');
const condition = require('./search-services');

module.exports = function (app) {
    app.set('hospitalRepo', new HospitalRepository(app.get('connection')));
    app.set('hospitalFactory', new HospitalFactory());
    app.set('hospitalSearcher', new HospitalSearcher(app.get('connection'), new HospitalFactory()));
    app.set('hospitalCondition', condition);
};
