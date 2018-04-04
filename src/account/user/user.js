class User {

    /**
	 *
     * @param {int} id
     * @return {User}
     */
	setId(id) {
		this.id = id;
		return this;
	}

    /**
	 *
     * @return {int|*}
     */
	getId() {
		return this.id;
	}

    /**
     *
     * @param {string} first_name
     * @return {User}
     */
    setFirstName(first_name) {
        this.first_name = first_name;
        return this;
    }

    /**
	 *
     * @return {string|*}
     */
	getFirstName() {
		return this.first_name;
	}

    /**
     *
     * @param {string} last_name
     * @return {User}
     */
    setLastName(last_name) {
        this.last_name = last_name;
        return this;
    }

    /**
	 *
     * @return {string|*}
     */
	getLastName() {
		return this.last_name;
	}

    /**
	 *
     * @param {string} avatar
     */
	setAvatar(avatar) {
		this.avatar = avatar;
	}

    /**
	 *
     * @return {string|*}
     */
	getAvatar() {
		return this.avatar;
	}

    /**
	 *
     * @param {int} credential_id
     */
    setCredentialId(credential_id) {
		this.credential_id = credential_id;
	}

    /**
	 *
     * @return {int|*}
     */
    getCredentialId() {
		return this.credential_id;
	}

    /**
	 *
     * @returns {string}
     */
	getUserName() {
    	return this.first_name + ' ' + this.last_name;
	}
}

module.exports = User;
