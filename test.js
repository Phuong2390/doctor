const app = require('express')();

app.set('config', require('./config/config'));
app.get('config').services.forEach(provider => provider(app));

console.log(app.get('connection'));