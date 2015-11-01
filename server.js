var express   = require( 'express' ),
  app         = express(),
  path        = require( 'path' ),
  hbs         = require( 'hbs' ),
  server;

app.use('/public', express.static( 'public' ));
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'hbs');

app.get( '/', function( req, res, next ){
  res.render( 'index' );
});

server = app.listen(3000, function () {
  var host = server.address().address,
      port = server.address().port;

  console.log('Express server listening on port ' + server.address().port);
});