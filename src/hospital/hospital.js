class Hospital {
	/**
	 *
	 * @param {string} name
	 * @param {INT} location_id
	 */
	constructor(name, location_id) {
		this.name = name;
		this.location_id = location_id;
	}
	
	/**
	 *
	 * @return {string}
	 */
	getName() {
		return this.name;
	}
	
	/**
	 *
	 * @return {Location}
	 */
	getLocation_id() {
		return this.location_id;
	}

    /**
	 *
     * @return {string}
     */
	getPhone() {
		return this.phone;
	}

    /**
	 *
     * @return {string}
     */
	getDescribe() {
		return this.describe;
	}
	
	/**
	 *
	 * @return {INT}
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
     * @param {INT} location_id
     */
	setLocation_id(location_id) {
		this.location_id = location_id;
	}

    /**
	 *
     * @param {string} phone
     */
	setPhone(phone) {
		this.phone = phone;
	}

    /**
	 *
     * @param {string} describe
     */
	setDescribe(describe) {
		this.describe = describe;
	}
	
}
module.exports = Hospital;