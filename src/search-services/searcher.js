class Searcher {
	constructor (connection) {
		this.connection = connection;
	}
	
	search(condition) {
		let sqlQuery = this.connection
			.select('hospitals.name').from('hospitals');
		condition.describe(sqlQuery);
		return sqlQuery;
	}
}
module.exports = Searcher;