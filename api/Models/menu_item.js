var mongoose = require('mongoose');
var Schema = mongoose.Schema;


module.exports = mongoose.model('Menu', new Schema({ 
	name: { type: String , required: true },
	short_name: { type: String , required: true },
	description: { type: String , required: true },
	price_small: { type: Number , required: false },
	price_large: { type: Number , required: true },
	large_portion_name: { type: String , required: false },
	small_portion_name: { type: String , required: false },
},{
	 versionKey: false
}));
