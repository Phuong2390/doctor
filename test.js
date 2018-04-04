const connection = require('./database/connection');
const Credential = require('./src/account/credential/credential');
const CredentialRepo = require('./src/account/credential/credential-repository');
const Encoder = require('./src/account/encoder-services/encoder');
const Register = require('./src/account/register-services/register');
const User = require('./src/account/user/user');
const UserRepo = require('./src/account/user/user-repository');
const Authentication = require('./src/account/authentication-services/authenticator');
let credential = new Credential('admin','123456');
let encoder = new Encoder();
let authentication = new Authentication(encoder, new CredentialRepo(connection));
authentication.logIn(credential).then(()=> {
	console.log ('ok');
});