// var http = require("http");

// const server = http.createServer(function(request, response) {
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/html');
//     response.end("<h2>Welcome to node js</h2>");
// });

// server.listen(3030, () => {
//     console.log("Server listening: http://127.0.0.1:3030");
// });


// var MongoClient = require("mongodb").MongoClient;

// var connectionString = "mongodb://localhost:27017/";

// console.log("Attempting to connect to MongoDB...");

// MongoClient.connect(connectionString, function(err, clientObj) {
//     if (err) {
//         console.error("Error connecting to MongoDB:", err.message);
//     } else {
//         console.log("Connected Successfully..");
//         client.close();  // Close the connection after successful connection
//     }
// });
// var MongoClient = require("mongodb").MongoClient;

// var connectionString = "mongodb://127.0.0.1:27017";

// console.log("Attempting to connect to MongoDB...");

// MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000 }, function(err, client) {
//     if (err) {
//         console.error("Error connecting to MongoDB:", err.message);
//     } else {
//         console.log("Connected Successfully..");
//         client.close();  // Close the connection after successful connection
//     }
// });

// var MongoClient = require("mongodb").MongoClient;

// var connectionString = "mongodb://127.0.0.1:27017";

// console.log("Attempting to connect to MongoDB...");

// MongoClient.connect(connectionString, { serverSelectionTimeoutMS: 5000 }, function(err, client) {
//     if (err) {
//         console.error("Error connecting to MongoDB:", err.message);
//     } else {
//         console.log("Connected Successfully..");
//         client.close();  // Close the connection after successful connection

//         // This will be executed after the connection is established
//         console.log("After connect call...");
//     }
// });


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://premprakash94129649:BuneqdGV1fKbJC4u@cluster0.jjqjxda.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// run().catch(console.dir);
// var mongoClient = require("mongodb").MongoClient;
// console.log("Stage 1 Completed");


// var connectionString = "mongodb://127.0.0.1:27017";
// console.log("Stage 2 Completed");

// mongoClient.connect(connectionString, function(err, clientObj){
//   if(!err) {
//     var dbo = clientObj.db("productDB");
//     dbo.collection("tblcategories").find().toArray(function(err, documents){
//       if(!err){
//         console.log(documents);
//       } else {
//         console.log(err);
//       }
//     });
//   } else {
//     console.log(err.message);
//   }
// });
// console.log("Stage 3 Completed");

var mongoClient = require("mongodb").MongoClient;
console.log("Stage 1 Completed");

var connectionString = "mongodb://127.0.0.1:27017";
console.log("Stage 2 Completed");

mongoClient.connect(connectionString, function(err, clientObj) {
  if (err) {
    console.log("Connection Error: " + err.message);
    return;
  }
  console.log("Stage 3 Completed - Connected to Database");

  var dbo = clientObj.db("productDB");
  dbo.collection("tblcategories").find().toArray(function(err, documents) {
    if (err) {
      console.log("Query Error: " + err);
    } else {
      console.log("Stage 4 Completed - Retrieved documents: ", documents);
    }
    clientObj.close(function(closeErr) {
      if (closeErr) {
        console.log("Close Connection Error: " + closeErr);
      } else {
        console.log("Database connection closed");
      }
    });
  });
});

console.log("Stage 3 Completed");
