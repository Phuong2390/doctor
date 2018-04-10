module.exports = function (request, response, next) {
    request.hospital = request.app.get('hospitalFactory').makeFromReq(request.body);
    next();
};