class Searcher {

    /**
     *
     * @param {connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    search(condition) {
        let sqlQuery = this.connection.select('hospitals.id', 'hospitals.name', 'hospitals.avgRate', 'locations.lat', 'locations.long', 'locations.address')
            .from('hospitals')
            .innerJoin('locations', function () {
                this.on('location_id', '=', 'locations.id')
            })
        condition.describe(sqlQuery);
        return sqlQuery;
    }
}

module.exports = Searcher;
