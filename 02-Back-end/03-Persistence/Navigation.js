import NavigationRepository from "../02-Repository/NavigationRepository";
import { Language } from "../../04-Config/Index";

class NavigationPersistence {
  constructor() {
    this.repository = new NavigationRepository();
  }
  GetAll(req, res) {
    return this.repository.GetAll().then(result => {
      if (result) res.json({ success: true, data: result });
      else res.json({ success: false, explain: Language.messages.error[1] });
    });
  }
}

export default NavigationPersistence;
