import UserManager from "../Persistence/User";

class User {
	constructor( app ) {
		this.manager = new UserManager();
		app.get( "/User/GetAll", ( req, res ) => {
			this.manager.GetAll( req, res );
		} );
	}
}

export default User;
