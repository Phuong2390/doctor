const CredentialRepository = require('../credential/credential-repository');
const connection = require('../../../database/connection');
const Encoder = require('../encoder/encoder');

class Authenticator {

    login(credential) {
        let credentialRepo = new CredentialRepository(connection);
        let bcrypt = new Encoder();
        return credentialRepo.findByEmail(credential.email).then(credentialDB => {
            if (!credentialDB[0]){
                throw new Error('Account khong ton tai');
            }
            return bcrypt.compare(credential.password, credentialDB[0].password);
        })
            .then((isLogin) => {
                if(!isLogin) throw new Error("Password sai");
                return 'login!';
            })
    }

}

module.exports = Authenticator;
