require("babel-polyfill");
require("babel-register")({
  presets: ["es2015"]
});

require("./Server");
