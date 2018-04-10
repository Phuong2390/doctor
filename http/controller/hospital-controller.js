class HospitalController {

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    search(request, response, next) {
        request.app.get('hospitalSearcher').search(request.condition)
            .then((hospitalList) => response.status(200).send(hospitalList.map(hospital => hospital.hospitalJson())))
            .catch(next);
    }

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    add(request, response, next) {
        request.app.get('hospitalRepo').add(request.hospital)
            .then(() => response.status(201).send({message: "Success!"}))
            .catch(next);
    }

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    edit(request, response, next) {
        request.app.get('hospitalRepo').edit(request.hospital)
            .then(() => response.status(200).send({message: "Success!"}))
            .catch(next)
    }

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    detail(request, response, next) {
        console.log(request.params.id);
        request.app.get('hospitalRepo').detail(request.params.id)
            .then(hospitals => hospitals.map(hospital => request.app.get('hospitalFactory').makeFromDB(hospital)))
            .then(books => response.status(200).send(books.map(book => book.hospitalJson())))
            .catch(next);
    }
}

module.exports = HospitalController;
