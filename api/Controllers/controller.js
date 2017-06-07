
const mongoose = require('mongoose');
const Dish     = mongoose.model('Dish');
const Menu     = mongoose.model('Menu');



exports.get_categories = function(req,res){

	Dish.find({},function (err,dish) {
		if(err)
			res.send(err)
		res.json(dish);
	});
};


exports.get_categories_by_ID = function(req,res){

	Dish.findById(req.params.dish_ID).exec(function (err,dish) {
		if(err)
			res.send(err)
		res.json(dish);
	});
};

exports.post_categories = function(req,res){

	 new Dish({ 
	 				name : req.body.name ,
	 				short_name : req.body.short_name ,
	 				special_instructions : req.body.special_instructions

	 			}).save(function (err, result) {
    
					    if(err) throw err;

					    res.json(result);
				 });
};
	

exports.get_menuItems = function (req,res) {

	if(req.query.categories)
	{
		Menu.find({short_name:req.query.categories},function (err,items) {
			if(err) throw err;

			res.json(items);
		})
	}
	else
	{
		Menu.find({},function (err,dish) {
			if(err)
				res.send(err)
			res.json(dish);
		});
	}
}

exports.post_menuItems = function(req,res){

	 new Menu({ 
	 				name : req.body.name ,
	 				short_name : req.body.short_name ,
	 				description : req.body.description,
	 				price_small : req.body.price_small,
	 				price_large : req.body.price_large,
	 				large_portion_name : req.body.large_portion_name,
	 				small_portion_name : req.body.small_portion_name

	 			}).save(function (err, result) {
    
					    if(err) throw err;

					    res.json(result);
				 });
};
	


exports.basic_route = function (req,res) {
	     res.json({ message: 'Welcome to the API !' });
}