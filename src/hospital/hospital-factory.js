const Hospital = require('./hospital');
const Location = require('../location/location');

class HospitalFactory {

    /**
     *
     * @param hospitalRaw
     * @return {Hospital} hospital
     */
    make(hospitalRaw) {
        let location = new Location(hospitalRaw.lat, hospitalRaw.long);
        location.setAddress(hospitalRaw.address);

        let hospital = new Hospital(hospitalRaw.name, location);
        hospital.setAvgRate(hospitalRaw.avgRate);

        return hospital;
    }
}

module.exports = HospitalFactory;
