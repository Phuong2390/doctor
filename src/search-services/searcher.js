class Searcher {
	constructor (connection) {
		this.connection = connection;
	}
	
	search(condition) {
		let sqlQuery = this.connection
			.select('hospitals.name','hospitals.location_id', 'locations.address', 'locations.lat', 'locations.long')
			.from('hospitals')
			.innerJoin('locations', function () {
				this.on('hospitals.location_id', '=', 'locations.id')
			});
		condition.describe(sqlQuery);
		return sqlQuery;
	}
}
module.exports = Searcher;