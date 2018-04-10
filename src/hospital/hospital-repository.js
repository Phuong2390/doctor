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
			lat: hospital.getLocation().getLat(),
			long: hospital.getLocation().getLong(),
			address: hospital.getLocation().getAddress()
		}).where({id: hospital.getLocation().getId()})
			.then(() => {
				return this.connection('hospitals').update({
					name: hospital.getName(),
				}).where({
					id: hospital.getId()
				})
			})
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

    /**
     *
     * @param {INT} id
     * @return {Promise <void>}
     */
	detail(id) {
        return this.connection('hospitals')
			.select('hospitals.id', 'hospitals.name', 'hospitals.avgRate', 'hospitals.location_id', 'locations.lat', 'locations.long', 'locations.address')
            .innerJoin('locations', function () {
                this.on('hospitals.location_id', '=', 'locations.id')
            })
			.where({
				'hospitals.id': id
			});
	}
}

module.exports = HospitalRepo;
