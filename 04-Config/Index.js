export routes from "./Routes";
export errors from "./Messages";
import app from "./App";
import * as lang from "./Languages/Index";
const language = lang[app.project.language];
export { language, app };
