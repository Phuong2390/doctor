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
        let sqlQuery = this.connection('hospitals')
            .select('hospitals.id', 'hospitals.name', 'hospitals.avgRate', 'locations.lat', 'hospitals.location_id', 'locations.long', 'locations.address')
            .innerJoin('locations', function () {
                this.on('hospitals.location_id', '=', 'locations.id')
            });
        condition.describe(sqlQuery);
        return sqlQuery.then(listHospitalRaw => listHospitalRaw.map(hospitalRaw => this.hospitalFactory.makeFromDB(hospitalRaw)));
    }
}

module.exports = Searcher;
