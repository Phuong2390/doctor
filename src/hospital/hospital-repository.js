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
		return this.connection('hospitals').insert({
			name: hospital.getName(),
			location_id: hospital.getLocation_id(),

		});
	}
	/**
	 *
	 * @param {Hospital} hospital
	 * @return {Promise <void>}
	 */
	edit(hospital) {
		return this.connection('hospitals').update({
			name: hospital.getName(),
			location_id: hospital.getLocation_id(),
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