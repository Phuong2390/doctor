class Raters {

    /**
     *
     * @param {User} user
     * @param {Hospital} hospital
     * @param {INT} score
     */
    constructor(user, hospital, score) {
        this.user = user;
        this.score = score;
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
     * @returns {INT|*}
     */
    getScore() {
        return this.score;
    }

    /**
     *
     * @param {int} id
     * @returns {Raters}
     */
    setId(id) {
        this.id = id;
        return this;
    }

    /**
     *
     * @returns {int|*}
     */
    getId() {
        return this.id;
    }
}

module.exports = Raters;
