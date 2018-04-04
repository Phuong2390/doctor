class Authenticator {
	constructor (encoder, credentialRepo) {
		this.encoder = encoder;
		this.credentialRepo = credentialRepo;
	}
	logIn (credential) {
		return this.credentialRepo.findByEmail(credential.email).then(credentialDB => {
			if (!credentialDB[0]){
				throw new Error('Account khong ton tai');
			}
			return this.encoder.compare(credential.password, credentialDB[0].password);
		}).then((isLogin) => {
			if(!isLogin) throw new Error("Password sai");
			return 'login!';
		})
	}
}

module.exports = Authenticator;
