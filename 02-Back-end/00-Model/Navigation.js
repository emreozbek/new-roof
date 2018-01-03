import mongoose from "mongoose";

const NavigationModel = () => {
  const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    icon: String,
    label: String,
    state: Number
  });
  const collection = "navigation";

  return (
    mongoose.models[collection] ||
    mongoose.model(collection, schema, collection)
  );
};
export default NavigationModel;
