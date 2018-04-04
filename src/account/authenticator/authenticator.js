class Authenticator {

    /**
     *
     * @param {CredentialRepository} credentialRepo
     * @param {Encoder} encoder
     */
    constructor(credentialRepo, encoder) {
        this.credentialRepo = credentialRepo;
        this.encoder = encoder;
    }

    /**
     *
     * @param credential
     * @returns {Promise<boolean>}
     */
    signIn(credential) {
        return this.credentialRepo.findByEmail(credential.getEmail())
            .then(credentialDB => {
                if (!credentialDB[0]) throw new Error("Account does not exit");
                credential.setId(credentialDB[0].id);
                return this.encoder.compare(credential.getPassword(), credentialDB[0].password);
            })
            .then((isLogin) => {
                if (!isLogin) throw new Error("Password fail");
                return credential;
            })
    }

}

module.exports = Authenticator;
