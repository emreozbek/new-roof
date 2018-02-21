import UserLogManager from "../Persistence/UserLog";

class UserLog {
	constructor( app ) {
		this.manager = new UserLogManager();
		app.post( "/User/Login", ( req, res ) => {
			this.manager.Login( req, res );
		} );
		app.post( "/User/Logout", ( req, res ) => {
			this.manager.Logout( req, res );
		} );
	}

	IsTokenInTheBlockList( token ) {
		return this.manager.IsTokenInTheBlockList( token );
	}

	CheckUserAuthority( url, authorized ) {
		return this.manager.IsTokenInTheBlockList( url, authorized );
	}
}

export default UserLog;
