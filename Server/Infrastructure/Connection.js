import mongoose from "mongoose";

import { databaseConfig } from "../Config";

let connect;
const Connection = (db = "materialCMS") => {
  mongoose.Promise = global.Promise;
  if (!connect) {
    connect = mongoose.connect(databaseConfig.path + db, {
      useMongoClient: true
    });
  }
  return connect;
};
export default Connection;
