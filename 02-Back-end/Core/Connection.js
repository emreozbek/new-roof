import mongoose from "mongoose";

import config from "../../04-Config/App";

let connect;
const Connection = (db = "materialCMS") => {
  mongoose.Promise = global.Promise;
  if (connect == null) {
    connect = mongoose.connect(config.database.path + db, {
      useMongoClient: true
    });
  }
  return connect;
};
export default Connection;
