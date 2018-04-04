class Interaction {

    /**
     *
     * @param {Commenter} commenter
     * @param {Raters} raters
     */
    constructor(commenter, raters) {
        this.commenter = commenter;
        this.raters = raters;
    }

    /**
     *
     * @returns {Commenter|*}
     */
    getCommenter() {
        return this.commenter;
    }

    /**
     *
     * @returns {Raters|*}
     */
    getRaters() {
        return this.raters;
    }
}

module.exports = Interaction;
