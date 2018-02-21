import mongoose from "mongoose";

const UserModel = () => {
	const collection = "user";
  const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    surname: String,
    username: String,
    email: String,
    password: String,
	  authorized: mongoose.Schema.Types.Array,
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

  return (
    mongoose.models[collection] ||
    mongoose.model(collection, schema, collection)
  );
};
export default UserModel;
