class Searcher {

    /**
     *
     * @param {connection} connection
     * @param {HospitalFactory} hospitalFactory
     */
    constructor(connection, hospitalFactory) {
        this.connection = connection;
        this.hospitalFactory = hospitalFactory;
    }

    search(condition) {
        let sqlQuery = this.connection.select('hospitals.id', 'hospitals.name', 'hospitals.avgRate', 'locations.lat', 'locations.long', 'locations.address')
            .from('hospitals')
            .innerJoin('locations', function () {
                this.on('location_id', '=', 'locations.id')
            });
        condition.describe(sqlQuery);
        return sqlQuery.then(listHospitalRaw => listHospitalRaw.map(hospitalRaw => this.hospitalFactory.make(hospitalRaw)));
    }
}

module.exports = Searcher;
