import mongoose from "mongoose";

const UserLogModel = () => {
	const collection = "userLog";
	const schema = mongoose.Schema( {
		_id: mongoose.Schema.Types.ObjectId,
		userId: mongoose.Schema.Types.ObjectId,
		token: String,
		state: Number
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
export default UserLogModel;
