class Commenter {

    /**
     *
     * @param {User} user
     * @param {Hospital} hospital
     * @param {string} content
     */
    constructor(user, hospital, content) {
        this.user = user;
        this.content = content;
        this.hospital = hospital;
    }

    /**
     *
     * @returns {User|*}
     */
    getUser() {
        return this.user;
    }

    /**
     *
     * @returns {Hospital|*}
     */
    getHospital() {
        return this.hospital;
    }

    /**
     *
     * @returns {string|*}
     */
    getContent() {
        return this.content;
    }
}

module.exports = Commenter;
