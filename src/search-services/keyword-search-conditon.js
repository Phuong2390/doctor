class KeywordSearchCondition {
	
	constructor (keyword) {
		this.keyword = keyword;
	}
	
	describe (sqlQuery) {
		return sqlQuery.where('name', 'like', '%' + this.keyword + '%')
		.where({'hospitals.deleted_at': null});
	}
}

module.exports = KeywordSearchCondition;
