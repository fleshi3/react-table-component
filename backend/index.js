const express = require('express');
const {buildSchema} = require('graphql');
const expressGraphQL = require('express-graphql');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 8081;

// Import Routes
const indexRouter = require('./routes/index');
const catalogRouter = require('./routes/catalog');

// Import mongoDB models for graphql
const schema = require('./graphql/index');
// init express server
const App = express();
// init express routes
App.use('/', indexRouter);
App.use('/catalog', catalogRouter);
// init graphQL endpoint
App.use(
  '/graphql',
  cors(),
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true,
  }),
);

// MongoDb imports
var mongoose = require('mongoose');
const uri =
  'mongodb://mark:navarro@cluster0-shard-00-00-nfcrq.mongodb.net:27017,cluster0-shard-00-01-nfcrq.mongodb.net:27017,cluster0-shard-00-02-nfcrq.mongodb.net:27017/local_library?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';

// init MongoDb connection
mongoose.connect(uri, {useNewUrlParser: true});
const db = mongoose.connection;

//error handling
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  // we're connected!
  console.log('mongoDB connected!');
});

App.listen(port, () => {
  console.log(`Now listening on port: ${port}`);
});
