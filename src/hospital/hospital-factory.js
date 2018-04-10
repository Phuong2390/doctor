const Hospital = require('./hospital');
const Location = require('../location/location');

class HospitalFactory {

    /**
     *
     * @param hospitalRaw
     * @return {Hospital} hospital
     */
    makeFromDB(hospitalRaw) {
        let location = new Location(hospitalRaw.lat, hospitalRaw.long);
        location.setAddress(hospitalRaw.address);
        location.setId(hospitalRaw.location_id);

        let hospital = new Hospital(hospitalRaw.name, location);
        hospital.setAvgRate(hospitalRaw.avgRate);
        hospital.setId(hospitalRaw.id);

        return hospital;
    }

    /**
     *
     * @param dataRaw
     * @return {Hospital}
     */
    makeFromReq(dataRaw) {
        let location = new Location(dataRaw.lat, dataRaw.long);
        location.setAddress(dataRaw.address);
        location.setId(dataRaw.location_id);

        return new Hospital(dataRaw.name, location);
    }
}

module.exports = HospitalFactory;
