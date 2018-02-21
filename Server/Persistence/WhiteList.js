import WhiteListRepository from "../Repository/WhiteListRepository";

class WhiteListPersistence {
	constructor() {
		this.repository = new WhiteListRepository();
	}
}

export default WhiteListPersistence;
