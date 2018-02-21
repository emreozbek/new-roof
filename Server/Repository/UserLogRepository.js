import UserLogModel from "../Model/UserLog";
import Repository from "../Infrastructure/Repository";

class UserLogRepository extends Repository {
	constructor() {
		super();
		this.model = new UserLogModel();
	}

	Login( user ) {
		return this.model.insert( user );
	}

	Logout( token ) {
		return this.model.findByIdAndUpdate( { token }, { state: 0 } );
	}

	IsTokenInTheBlockList( token ) {
		return this.model.find( { token } );
	}
}

export default UserLogRepository;
