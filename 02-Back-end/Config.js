export const KEY = "QD9G1N6UH2V4KK";

export const serverConfig = {
  port: 4000,
  header: [
    {
      key: "Access-Control-Allow-Origin",
      value: "*"
    },
    {
      key: "Access-Control-Allow-Credentials",
      value: true
    },
    {
      key: "Access-Control-Allow-Headers",
      value: "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    }
  ]
};
export const databaseConfig = {
  path: "mongodb://localhost/"
};
