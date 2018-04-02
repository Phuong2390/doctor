const User = require('../user/user');
const UserRepository = require('../user/user-repository');
const CredentialRepository = require('../credential/credential-repository');
const Encoder = require('../encoder/encoder');

class Register {

    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param credential
     * @return {PromiseLike}
     */
    signUp(credential) {
        let encoder = new Encoder();
        let credentialRepo = new CredentialRepository(this.connection);
        return encoder.hash(credential.password)
            .then(password => {
                credential.password = password;
                return credentialRepo.add(credential);
            }).then(credential_id => {
                let user = new User();
                let userRepo = new UserRepository(this.connection);
                user.setCredentialId(credential_id);
                return userRepo.add(user);
            })
    }
}

module.exports = Register;
