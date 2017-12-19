import mongoose from "mongoose";

const NavigationModel = (table = "user") => {
  const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    surname: String,
    username: String,
    email: String,
    password: String,
    state: Number
  });
  return mongoose.model(table, schema, table);
};
export default NavigationModel;
