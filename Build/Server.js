const express = require( "express" );

const config = require( "../Config/App" );

const app = express();
app.use( express.static( __dirname ) );
app.use( ( req, res ) => {
	res.sendFile( "index.html", { root: __dirname } );
} );

app.listen( config.client.port );
