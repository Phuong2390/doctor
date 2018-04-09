class HospitalController {

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    search(request, response, next) {
        request.app.get('hospitalSearcher').search(request.codition)
            .then((hospitalList) => response.status(200).send(hospitalList.map(hospital => hospital.hospitalJson())))
            .catch(next);
    }

    add(request, response, next) {
        request.app.get('hospitalRepo').add(request.hospital)
            .then(() => {
                response.status(201).send({message: "Success!"})
            })
            .catch(next);
    }

    edit(request, response, next) {
        request.app.get('hospitalRepo').edit(request.hospital)
            .then(() => {
                response.status(200).send({message: "Success!"})
            })
    }
}

module.exports = HospitalController;
