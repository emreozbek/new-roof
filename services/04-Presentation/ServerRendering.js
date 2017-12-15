import React from "react";
import { renderToString } from "react-dom/server";

const routes = app => {
  app.get("/ServerRendering", (req, res) => {
    res.write(
      "<!DOCTYPE html><html><head><title>Hello World</title></head><body>"
    );
    res.write("<div id='app'>");
    res.write(renderToString(<h1>Hello World(Server Side Rendering)</h1>));
    res.write("</div></body></html>");
    res.end();
  });
};
export default routes;
