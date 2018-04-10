module.exports = function (request, response, next) {
    request.condition = request.app.get('filterSearchCondition').refine(request);
    next();
};