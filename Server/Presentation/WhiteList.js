import WhiteListManager from "../Persistence/WhiteList";

class WhiteList {
	constructor() {
		this.manager = new WhiteListManager();
	}

	IsURLInTheWhiteList( url ) {
		return this.manager;
	}
}

export default WhiteList;
