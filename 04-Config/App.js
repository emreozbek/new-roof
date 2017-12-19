const AppConfig = {
  development: {
    port: 3000
  },
  host: "http://localhost",
  database: {
    path: "mongodb://localhost/"
  },
  server: {
    port: 4000,
    header: []
  },
  client: {},
  project: {
    title: "Material CMS",
    version: "V.1",
    copyright: "Material CMS V.1 © Copyright 2018",
    language: "en"
  }
};

module.exports = AppConfig;
