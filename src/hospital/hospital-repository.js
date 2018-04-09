class HospitalRepo {
	/**
	 *
	 * @param {Connection} connection
	 */
	constructor (connection) {
		this.connection = connection;
	}
	
	/**
	 *
	 * @param {Hospital} hospital
	 * @return {Promise <void>}
	 */
	add(hospital) {
		return this.connection('locations').insert({
			lat: hospital.getLocation().getLat(),
			long: hospital.getLocation().getLong(),
			address: hospital.getLocation().getAddress()
		}).then((locationId) => {
			hospital.getLocation().setId(locationId);
			return this.connection('hospitals').insert({
				name: hospital.getName(),
				location_id: hospital.getLocation().getId(),
				avgRate: 0
			})
		});
	}
	/**
	 *
	 * @param {Hospital} hospital
	 * @return {Promise <void>}
	 */
	edit(hospital) {
		return this.connection('locations').update({
			name: hospital.getName(),
			location_id: hospital.getLocation_id()
		}).where({
			id: hospital.getId()
		});
	}
	
	/**
	 *
	 * @param {INT} id
	 * @return {Promise <void>}
	 */
	remove(id) {
		return this.connection('hospitals').update({
			deleted_at: new Date().toLocaleString()
		}).where({
			id: id
		});
	}
}

module.exports = HospitalRepo;
