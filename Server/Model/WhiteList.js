import mongoose from "mongoose";

const whiteListModel = () => {
	const collection = "whiteList";
	const schema = mongoose.Schema( {
		_id: mongoose.Schema.Types.ObjectId,
		url: mongoose.Schema.Types.Array
	} );
	schema.set( "toJSON", {
		transform: ( doc, ret ) => {
			/* eslint no-param-reassign:0 */
			/* eslint no-underscore-dangle:0 */
			ret.id = ret._id;
			delete ret._id;
		}
	} );

	return (
		mongoose.models[ collection ] ||
		mongoose.model( collection, schema, collection )
	);
};
export default whiteListModel;
