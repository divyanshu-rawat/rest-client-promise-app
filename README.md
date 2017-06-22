## A restful Api built for serving as a Backend for a JS Promise App.

* Please Use POSTMAN in order to post data !

##

[![Join the chat](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/divyanshu001)
[![Contact me on Codementor](https://cdn.codementor.io/badges/contact_me_github.svg)](https://www.codementor.io/divyanshurawat?utm_source=github&utm_medium=button&utm_term=divyanshurawat&utm_campaign=github)
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/r46956)
[![DUB](https://img.shields.io/dub/l/vibe-d.svg?style=flat)](#)

[![Divyanshu](https://img.shields.io/badge/divyanshu-owner-brightgreen.svg?style=flat)](http://www.divyanshurawat.in)
[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/divyanshu-rawat)
[![Build Status](https://travis-ci.org/divyanshu-rawat/JS-Testing.svg?branch=master)](https://travis-ci.org/divyanshu-rawat/JS-Testing)
[![NPM](https://img.shields.io/badge/npm-v3.10.10-blue.svg)](https://www.npmjs.com/package/npm)


### Live Application Back-End API 

[![Live Demo Here](https://img.shields.io/badge/website-up-orange.svg)](https://divyanshu-restaurant.herokuapp.com/api/categories)

##

#### Description 
* Built a rest Api in Node.js by leveraging Node.js + MongoDB.
* ORM Used Mongoose.
* A restful Api built for serving as a Backend for a JS Promise App.

##

### How it works !
#### Api Consist of following End Points

```

  router.get('/categories',callback.get_categories);

	router.post('/categories',callback.post_categories);

	router.get('/categories/:dish_ID',callback.get_categories_by_ID);

	router.get('/menuItems',callback.get_menuItems);

	router.post('/menuItems',callback.post_menuItems);

	router.get('/',callback.basic_route);

```


##

#### Installation Instructions :grey_exclamation:

* Clone or download the repo. into any fresh temporary folder.

* Cd into that root folder you just cloned locally.

* Open terminal in the current folder and to install all dependencies type 

```javascript
   npm install 
```

* Now typing 

```javascript
   npm start
```

* will start a server !

##

#### DB Used (MongoDB)

* MLab's MongoDB hosting platform is the fastest growing cloud Database-as-a-Service in the world. Get started with a free database and expert support.

##

#### Package Manager Used (NPM)

* NPM is the default package manager for the JavaScript runtime environment Node.js.

##

#### Package.json (dependencies)
  
* For dependencies refer Package.json.

##

#### For Testing (Postman)

* Postman extension can be used for testing !
* Supercharge your API workflow with Postman! Build, test, and document your APIs faster.
* You can now fire up postman and then perform several operations on the REST API.

##

### Contributing

1. Create your **_branch_**: `git checkout -b my-new-feature`

2. **_Commit_** your changes: `git commit -m 'Add some feature'`

3. **_Push_** to the branch: `git push origin my-new-feature`

4. Send a **Pull Request**

5. **_Enjoy!_**

##


#### Examples

* GET Request to URL https://divyanshu-restaurant.herokuapp.com/api/categories 

![alt tag](https://github.com/divyanshu-rawat/Backend-For-JS-Promise-App/blob/master/snapshots/route_categories.png)

##

* GET Request to URL https://divyanshu-restaurant.herokuapp.com/api/menuItems

![alt tag](https://github.com/divyanshu-rawat/Backend-For-JS-Promise-App/blob/master/snapshots/route_menuItems.png)

##

* GET Request to URL https://divyanshu-restaurant.herokuapp.com/api/menuItems?categories=A

![alt tag](https://github.com/divyanshu-rawat/Backend-For-JS-Promise-App/blob/master/snapshots/query_string_route.png)

##

