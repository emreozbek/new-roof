import Routes from "./Routes";
import App from "./App";
import * as Lang from "./Languages/Index";

const Language = Lang[App.project.language];

export { Language, App, Routes };
