class Searcher {

    /**
     *
     * @param {connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    search(condition) {
        let sqlQuery = this.connection.select('hospitals.id', 'hospitals.name', 'locations.lat', 'locations.long', 'locations.address')
            .from('hospitals')
            .innerJoin('locations', function () {
                this.on('location_id', '=', 'locations.id')
            }).orderBy('id', 'asc');
        condition.describe(sqlQuery);
        return sqlQuery;
    }
}

module.exports = Searcher;
