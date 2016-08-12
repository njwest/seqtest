var Sequelize = require('sequelize');

var connection = new Sequelize('demo_schema', 'root');

var Article = connection.define('article', {
  title: Sequelize.STRING,
  body: Sequelize.TEXT
});

connection.sync().then(function () {
  Article.findById(1).then(function(article){
    console.log(article.dataValues);
  });
});

var promise = new Promise(function (resolve, reject){
  // reject(new Error('uh oh'))
  resolve('all good')
})

promise.then(function (result){
  console.log('was it good?', result)
}).catch(function (err){
  console.error('ERR', err)
})

// connection.sync().then(function () {
//   Article.findAll().then(function(articles) {
//     console.log(articles.length);
//   });
// });
