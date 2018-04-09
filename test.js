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

let search = new Searcher(connection, new hospitalFactory());

let undelated = new UndeletedSearchCondition();

search.search(undelated).then(console.log);