class Raters {

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
     * @param {String} score
     * @returns {Raters}
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
     * @returns {Raters}
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
     * @returns {Raters}
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

module.exports = Raters;
