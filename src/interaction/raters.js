class Raters {

    /**
     *
     * @param {User} user
     * @param {Hospital} hospital
     * @param {INT} rate
     */
    constructor(user, hospital, rate) {
        this.user = user;
        this.rate = rate;
        this.hospital = hospital;
    }

    getUser() {
        return this.user;
    }

    getHospital() {
        return this.hospital;
    }

    getRate() {
        return this.rate;
    }
}

module.exports = Raters;
