const connection = require('./database/connection');

/*
const CredentialRepo= require('./src/credential/credential-repository');
const CreBcrypt 	= require('./src/credential/bcrypt-password');
const Credential 	= require('./src/credential/credential');
const connection = require('./database/connection');

let pass = new CreBcrypt();
let credential = new Credential ('vanphuong','1234' );

pass.makeFromRequest(credential).then(function (result) {
	console.log (result);
	let repo = new CredentialRepo(connection);
	repo.findByEmail('vanphuong').then(function (result) {
        console.log(result);
    })
});
*/

/*const Authenticator = require('./src/account/authenticator/authenticator');
const Credential = require('./src/account/credential/credential');

let cre = new Credential('v', '1234');

let authen = new Authenticator();

authen.login(cre).then(console.log);*/

/*const Bcrypt = require('./src/credential/bcrypt-password');

let bcrypt = new Bcrypt();

bcrypt.hash('viet').then(result => {
	bcrypt.compare('viet', result).then(console.log)
});*/

/*
const User = require('./src/account/user/user');
const UserRepo = require('./src/account/user/user-repository');
const connection = require('./database/connection');

let user = new User();
console.log(user);
let repo = new UserRepo(connection);

repo.add(user).then(console.log);*/

