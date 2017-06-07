
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


module.exports = mongoose.model('Dish', new Schema({ 
	name: { type: String , required: true },
	short_name: { type: String , required: true },
	special_instructions: { type: String , required: true },

},{
	 versionKey: false
}));


