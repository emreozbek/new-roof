import mongoose from "mongoose";

const NavigationModel = () => {
	const collection = "navigation";
  const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    icon: String,
    label: String,
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
export default NavigationModel;
