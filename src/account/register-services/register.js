class Register {

    /**
     *
     * @param {CredentialRepository} credentialRepo
     * @param {UserRepository} userRepo
     * @param {Encoder} encoder
     */
    constructor(credentialRepo, userRepo, encoder) {
        this.encoder = encoder;
        this.userRepo = userRepo;
        this.credentialRepo = credentialRepo;
    }

    /**
     *
     * @param credential
     * @param user
     * @return {PromiseLike}
     */
    signUp(credential, user) {
        return this.encoder.hash(credential.password)
            .then(password => {
                credential.password = password;
                return this.credentialRepo.add(credential);
            }).then(credentialId => {
                user.setCredentialId(credentialId);
                return this.userRepo.add(user);
            })
    }
}

module.exports = Register;
