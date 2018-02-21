import UserLogRepository from "../Repository/UserLogRepository";
import TokenWorks from "../Infrastructure/Token";
import { Language } from "../../Config/Index";

class UserLogPersistence {
	constructor() {
		this.repository = new UserLogRepository();
		this.tokenWorks = new TokenWorks();
	}

	Login( req, res ) {
		const user = {
			username: req.body.username,
			password: req.body.password,
			state: 1
		};
		this.repository.Login( user ).then( data => {
			if ( data ) {
				const token = this.tokenWorks.Create( {
					id: data.id
				} );
				res.json( {
					success: true,
					token
				} );
			} else
				res.json( {
					success: false,
					explain: Language.messages.error[ 0 ]
				} );
		} );
	}

	Logout( req, res ) {
		const token = req.headers.authorization;
		this.repository.Logout( token ).then( () => {
			res.json( {
				success: true,
				explain: "Logout success."
			} );
		} );
	}

	IsTokenInTheBlockList( token ) {
		return this.repository.IsTokenInTheBlockList( token );
	}
}

export default UserLogPersistence;
