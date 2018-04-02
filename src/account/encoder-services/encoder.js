let bcrypt = require('bcrypt');
class Encoder {
	constructor() {
		this.saltRounds =10;
	}
	hash(password) {
		return bcrypt.hash(password, this.saltRounds).then(password => {
			return password;
		});
	}
	compare(password, hash) {
		return bcrypt.compare(password, hash)
	}
}
module.exports = Encoder;