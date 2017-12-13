import mongoose from "mongoose";

const NavigationModel = (table = "navigation") => {
  const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    icon: String,
    label: String,
    state: Boolean
  });
  return mongoose.model(table, schema, table);
};
export default NavigationModel;
