import mongoose from "mongoose";

const RoleModel = () => {
  const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    url: String,
    authorized: Array,
    state: Number
  });
  const collection = "role";

  return (
    mongoose.models[collection] ||
    mongoose.model(collection, schema, collection)
  );
};
export default RoleModel;
