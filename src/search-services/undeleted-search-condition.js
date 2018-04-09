class UndeletedSearchCondition {

    /**
     *
     * @param {string} keyword
     */
    constructor(keyword) {
        this.keyword = keyword;
    }

    /**
     *
     * @param sqlQuery
     * @returns {Promise <void>}
     */
    describe(sqlQuery) {
        return sqlQuery.orderBy('id', 'asc').where({'hospitals.deleted_at': null})
    }
}

module.exports = UndeletedSearchCondition;
