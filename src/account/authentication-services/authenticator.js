class Authenticator {
	constructor (encoder, credentialRepo) {
		this.encoder = encoder;
		this.credentialRepo = credentialRepo;
	}
	logIn (credential) {
		return this.credentialRepo.findByEmail(credential.getEmail()).then(credentialDB => {
			if (!credentialDB[0]){
				throw new Error('Account does not exist');
			}
			return this.encoder.compare(credential.getPassword(), credentialDB[0].password);
		}).then((isLogin) => {
			if(!isLogin) throw new Error("Wrong Password ");
			return credential;
		})
	}
}

module.exports = Authenticator;
