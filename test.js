
const connection = require('./database/connection');
const Credential = require('./src/account/credential/credential');
const CredentialRepo = require('./src/account/credential/credential-repository');
const Encoder = require('./src/account/encoder-services/encoder');
const Register = require('./src/account/register-services/register');
const User = require('./src/account/user/user');
const UserRepo = require('./src/account/user/user-repository');
const Authentication = require('./src/account/authentication-services/authenticator');
const Searcher = require('./src/search-services/searcher');
const KeywordSearchCondition = require('./src/search-services/keyword-search-conditon');
const Hospital = require('./src/hospital/hospital');
const HospitalsRepo = require('./src/hospital/hospital-repository');

/*let hospital = new Hospital('phuong', 1);
let repo = new HospitalsRepo(connection);
repo.add(hospital).then(function () {
	console.log (hospital);
});*/
let searcher = new Searcher(connection);
let keyword = new KeywordSearchCondition('vu');
searcher.search(keyword).then(function (result) {
	console.log (result);
});


