class Rate {

    /**
     *
     * @param {User} user
     * @param {Hospital} hospital
     */
    constructor(user, hospital) {
        this.user = user;
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
     * @param {INT} score
     * @returns {Rate}
     */
    setScore(score) {
        this.score = score;
        return this;
    }

    /**
     *
     * @returns {INT|*}
     */
    getScore() {
        return this.score;
    }

    /**
     *
     * @param {String} id
     * @returns {Rate}
     */
    setId(id) {
        this.id = id;
        return this;
    }

    /**
     *
     * @returns {INT|*}
     */
    getId() {
        return this.id;
    }

    /**
     *
     * @param {String} content
     * @returns {Rate}
     */
    setContent(content) {
        this.content = content;
        return this;
    }

    /**
     *
     * @returns {String|*}
     */
    getContent() {
        return this.content;
    }
}

module.exports = Rate;
