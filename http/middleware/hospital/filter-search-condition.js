class FilterSearchCondition {

    constructor(condition) {
        this.condition = condition;
    }

    refine(request) {
        let condition = this.condition;
        if(request.path === '/search/keyword') {
            return new condition.KeywordSearch(request.query.keyword)
        }
        else if(request.path === '/search/top') {
            return new condition.TopRateSeaarch(request.query.top)
        }
        else if(request.path === '/') {
            return new condition.UndeletedSearch();
        }
    }
}

module.exports = FilterSearchCondition;
