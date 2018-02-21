import express from "express";
import bodyParser from "body-parser";
import Connection from "./Infrastructure/Connection";
import Token from "./Infrastructure/Token";
import * as Presentations from "./Presentation/Index";
import { serverConfig } from "./Config";

const app = express();
Connection();

app.set("trust proxy", 1);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  serverConfig.header.map(item => res.header(item.key, item.value));

  if (req.method !== "OPTIONS") {
	  const whiteList = new Presentations.WhiteList();
	  const userControl = new Presentations.UserLog( app );
    const tokenControl = new Token();
    const token = req.headers.authorization;
    const url = req.originalUrl;
	  const requsetToken = tokenControl.Decode( token ) || "";

	  Promise.all( [
		  whiteList.IsURLInTheWhiteList( url ),
		  userControl.IsTokenInTheBlockList( token ),
		  userControl.CheckUserAuthority( url, requsetToken.authorized )
	  ] ).then( values => {
		  console.log( values );
		  res.json( {
			  success: false,
			  explain: "Authorization Error."
		  } );
	  } );
  } else next();
});

Presentations.Navigation(app);
//Presentations.User(app);

app.listen(serverConfig.port, () => {
  const str = "Example app listening on port ";
  /* eslint no-console:0 */
  console.log(str + serverConfig.port);
});
