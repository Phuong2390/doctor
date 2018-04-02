class Credential {

    /**
	 *
     * @param {string} email
     * @param {string} password
     */
	constructor (email, password) {
		this.email = email;
		this.password  = password;
	}

    /**
	 *
     * @param {int} id
     * @return {Credential}
     */
	setId(id) {
		this.id = id;
		return this;
	}
	
	/**
	 *
	 * @param password
	 * @return {Credential}
	 */
	setPassword(password) {
		this.password = password;
		return this;
	}

    /**
	 *
     * @return {string|*}
     */
	getEmail() {
		return this.email;
	}

    /**
	 *
     * @return {string|*}
     */
	getPassword() {
		return this.password;
	}

    /**
	 *
     * @return {int|*}
     */
	getId() {
		return this.id;
	}

}
module.exports = Credential;
