class UserRepo {
	/**
	 *
	 * @param {Connection} connection
	 */
	constructor (connection) {
		this.connection = connection;
	}
	
	/**
	 *
	 * @param {User} user
	 * @return {Promise <void>}
	 */
	add(user) {
		return this.connection('users').insert({
			first_name 	 : user.getFirstName(),
			last_name    : user.getLastName(),
			avatar		 : user.getAvatar(),
			credential_id: user.getCredentialId()
		});
	}

    /**
	 *
     * @param {User} user
     * @return {Promise <void>}
     */
	edit(user) {
		return this.connection('users').update({
			first_name 	 : user.getFirstName(),
			last_name    : user.getLastName(),
			avatar		 : user.getAvatar(),
            credential_id: user.getCredentialId()
        }).where({
            id: user.getId()
		});
	}

	getByCredential_Id(cre) {

	}
	
}
module.exports = UserRepo;