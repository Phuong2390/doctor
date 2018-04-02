
class LocationRepo {
	constructor (connection) {
		this.connection = connection;
	}
	add(location) {
		return this.connection('locations').insert({
			lat : location.getLat(),
			long: location.getLong(),
			address: location.getAddress()
		});
		
	}
	edit(location) {
		return this.connection('locations').update({
			lat : location.getLat(),
			long: location.getLong(),
			address: location.getAddress()
		});
	}
}
module.exports = LocationRepo;