import WhiteListModel from "../Model/WhiteList";
import Repository from "../Infrastructure/Repository";

class WhiteListRepository extends Repository {
	constructor() {
		super();
		this.model = new WhiteListModel();
	}
}

export default WhiteListRepository;
