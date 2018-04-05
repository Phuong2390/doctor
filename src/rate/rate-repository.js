class Rate {

    /**
     *
     * @param {connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {Rate} rate
     * @returns {Promise <void>}
     */
    add(rate) {
        return this.connection('rates').insert({
            hospital_id: rate.getHospital().getId(),
            hospital_name: rate.getHospital().getName(),
            user_id: rate.getUser().getId(),
            user_name: rate.getUser().getUserName(),
            score: rate.getScore(),
            content: rate.getContent()
        }).then(() => {
            this.connection('rates').avg('score as avgRate').where({
                hospital_id: rate.getHospital().getId()
            }).then((rateAvg) => {
                return this.connection('hospitals').update(rateAvg[0]).where({
                    id: rate.getHospital().getId()
                })
            })
        });
    }

    /**
     *
     * @param {Rate} rate
     * @returns {Promise <void>}
     */
    edit(rate) {
        return this.connection('rates').update({
            hospital_id: rate.getHospital().getId(),
            hospital_name: rate.getHospital().getName(),
            user_id: rate.getUser().getId(),
            user_name: rate.getUser().getUserName(),
            score: rate.getScore(),
            content: rate.getContent()
        }).where({id: rate.getId()});
    }

    /**
     *
     * @param {INT} id
     * @returns {Promise <void>}
     */
    remove(id) {
        return this.connection('rates').update({
            deleted_at: new Date().toLocaleString()
        }).where({id: id});
    }
}

module.exports = Rate;
