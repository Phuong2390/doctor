class Hospital {

	/**
	 *
	 * @param {string} name
	 * @param {Location} location
	 */
	constructor(name, location) {
		this.name = name;
		this.location = location;
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
     * @return {Location|*}
     */
	getLocation() {
		return this.location;
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
     * @param id
     * @return {Hospital}
     */
	setId(id) {
		this.id = id;
		return this;
	}

    /**
	 *
     * @param {Location} location
     * @return {Hospital}
     */
	setLocation_id(location) {
		this.location = location;
		return this;
	}

    /**
	 *
     * @param {number}avgRate
     * @return {Hospital}
     */
	setAvgRate(avgRate) {
		this.avgRate = avgRate;
		return this;
	}

	getAvgRate() {
		return this.avgRate;
	}

	hospitalJson() {
		return {
			id: this.getId(),
			name: this.getName(),
			avgRate: this.getAvgRate(),
			location: this.getLocation()
		}
	}
	
}
module.exports = Hospital;