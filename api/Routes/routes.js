module.exports = function (router){

	var callback = require('../Controllers/controller');

	router.all('/*', function(req, res, next) {
		  res.header("Access-Control-Allow-Origin", "*");
		  res.header("Access-Control-Allow-Headers", "X-Requested-With");
		  next();
		});

	router.get('/categories',callback.get_categories);

	router.post('/categories',callback.post_categories);

	router.get('/categories/:dish_ID',callback.get_categories_by_ID);

	router.get('/menuItems',callback.get_menuItems);

	router.post('/menuItems',callback.post_menuItems);

	router.get('/',callback.basic_route);

}