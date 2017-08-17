var express = require("express");
var cors = require('cors')

var app = express();
app.use(cors());



app.set('port', (process.env.PORT || 5000));



require('./api/route.js')(app);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
