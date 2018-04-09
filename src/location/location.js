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

    /**
	 *
     * @return {float|*}
     */
	getLat() {
		return this.lat;
	}

    /**
	 *
     * @return {float|*}
     */
	getLong() {
		return this.long;
	}

    /**
	 *
     * @return {String|*}
     */
	getAddress() {
		return this.address;
	}

    /**
	 *
     * @return {INT|*}
     */
	getId() {
		return this.id;
	}

    /**
	 *
     * @param {INT} id
     */
	setId(id) {
		this.id = id;
	}

    /**
	 *
     * @param {String} address
     */
	setAddress(address) {
		this.address = address;
	}
}
module.exports = Location;