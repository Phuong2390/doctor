class KeywordSearchCondition {

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
        return sqlQuery.where('name', 'like', '%' + this.keyword + '%')
            .where({'hospitals.deleted_at': null})
    }
}

module.exports = KeywordSearchCondition;
