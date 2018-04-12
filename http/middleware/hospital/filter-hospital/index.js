const FilterSearchCondition = require('./filter-search-condition');
module.exports = function(app) {
    app.set('filterSearchCondition', new FilterSearchCondition(app.get('hospitalCondition')));
};
