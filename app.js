const express = require('express');
const app = express();
const body_parser = require('body-parser');
const http = require('http').Server(app);

const globalFunction = require('./globalFunctions.js');
// setup template
app.set('view engine','ejs');
/*
// session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
*/
// body parser
app.use( body_parser.json() );
app.use(body_parser.urlencoded({
  extended: true
}));

/*
// cookie
app.use(cookieparser('randomStringisHere222'));
app.use(csrf({cookie:true}));
*/
// static files (css, image, js)
app.use('/assets',express.static('assets'));

app.set('port', (process.env.PORT || 8080));

// home controller
//globalFunction.getController('home')(app);

http.listen(app.get('port'), function(err){
    if(err) throw err;
    console.log('Server is stated with port : ' + app.get('port'));
});