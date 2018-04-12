const app = require('express')();

app.set('config', require('./config/config'));
app.get('config').services.forEach(provider => provider(app));
app.listen(app.get('config').http.port, () => {
    console.log('Example app listening on port ' + app.get('config').http.port)
});