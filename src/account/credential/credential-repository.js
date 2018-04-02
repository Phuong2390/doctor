class CredentialRepo {
	/**
	 *
	 * @param {Connection} connection
	 */
	constructor (connection) {
		this.connection = connection;
	}
	
	/**
	 *
	 * @param {Credential} credential
	 * @return {Promise <void>}
	 */
	add(credential) {
		return this.connection('credentials').insert({
			email 	    : credential.getEmail(),
			password    : credential.getPassword(),
		});
	}

    /**
	 *
     * @param email
     * @return {Promise <void>}
     */
	findByEmail(email) {
		return this.connection('credentials').select().where({
			email: email,
			deleted_at: null
		})
	}
	deleted(id) {
		return this.connection('credentials').where({
			id: id
		}).del();
	}
}
module.exports = CredentialRepo;