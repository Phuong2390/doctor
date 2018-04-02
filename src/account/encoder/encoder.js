const bcrypt = require('bcrypt');

class Encoder {

	constructor() {
        this.saltRounds = 10;
	}

    /**
	 *
     * @param {string} pass
     * @param {string} hash
     * @return {boolean}
     */
	compare(pass, hash) {
		return bcrypt.compare(pass, hash);
	}

    /**
	 *
     * @param {string} pass
     * @return {*|PromiseLike<T>|Promise<T>}
     */
	hash(pass) {
		return bcrypt.hash(pass, this.saltRounds).then(pass => {
			return pass;
		});
	}
}

module.exports = Encoder;