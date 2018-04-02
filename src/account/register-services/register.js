
class Register {
	constructor (encoder, credentialRepo, userRepo) {
		this.encoder = encoder;
		this.credentialRepo = credentialRepo;
		this.userRepo = userRepo;
	}
	signUp(credential, user) {
		return this.encoder.hash(credential.getPassword())
			.then(password => {
				credential.setPassword(password);
				return this.credentialRepo.add(credential);
			}).then(credentialId => {
				user.setCredentialId(credentialId);
				return this.userRepo.add(user)
			}).catch();
	}
}
module.exports = Register;
