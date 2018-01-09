import mongoose from "mongoose";

const RoleModel = () => {
  const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    url: String,
    authorized: Array,
    state: Number
  });
  schema.set("toJSON", {
    transform: (doc, ret) => {
      /* eslint no-param-reassign:0 */
      /* eslint no-underscore-dangle:0 */
      ret.id = ret._id;
      delete ret._id;
    }
  });
  const collection = "role";

  return (
    mongoose.models[collection] ||
    mongoose.model(collection, schema, collection)
  );
};
export default RoleModel;
