class TopRateSearchCondition {

    /**
     *
     * @param {INT} topRate
     */
    constructor(topRate) {
        this.topRate = topRate;
    }

    /**
     *
     * @param sqlQuery
     * @returns {Promise <Promise>}
     */
    describe(sqlQuery){
        return sqlQuery.orderBy('avgRate', 'desc').where({
            deleted_at: null
        }).limit(this.topRate);
    }
}

module.exports = TopRateSearchCondition;
