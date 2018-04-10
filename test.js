const RateRepository = require('./src/rate/rate-repository');
const connection = require('./database/connection');
const Rate = require('./src/rate/rate');
const User = require('./src/account/user/user');
const Hospital = require('./src/hospital/hospital');
const HospitalRepo = require('./src/hospital/hospital-repository');
const Authenticate = require('./src/account/authenticator/authenticator');
const CredentialRepo = require('./src/account/credential/credential-repository');
const Encoder = require('./src/account/encoder/encoder');
const Credential = require('./src/account/credential/credential');
const Searcher = require('./src/search-services/searcher');
const TopRateSearchCondition = require('./src/search-services/top-rate-search-condition');
const KeywordSearchCondition = require('./src/search-services/keyword-search-condition');
const UndeletedSearchCondition = require('./src/search-services/undeleted-search-condition');
const Location = require('./src/location/location');
const hospitalFactory = require('./src/hospital/hospital-factory');
let location = new Location(21.08, 105.84);
location.setAddress('Ha Noi');
location.setId(1);

let hospital = new Hospital('Benh vien E', location);
hospital.setId(1);


let hospitalRepo = new HospitalRepo(connection);
hospitalRepo.edit(hospital).then(function () {
    console.log('Thanh cong');
});