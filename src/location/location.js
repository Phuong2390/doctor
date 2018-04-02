class Location {
	/**
	 *
	 * @param {float} lat
	 * @param {float} long
	 */
	constructor (lat, long) {
		this.lat = lat;
		this.long = long;
	}
	
	getLat() {
		return this.lat;
	}
	getLong() {
		return this.long;
	}
	getAddress() {
		return this.address;
	}
	getId() {
		return this.id;
	}
	setId(id) {
		this.id = id;
	}
	setAddress(address) {
		this.address = address;
	}
}
module.exports = Location;