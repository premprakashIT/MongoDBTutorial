// const mongoos = require("mongoos");

// var connectionString = "mongodb://localhost:27017/";

// console.log("Attempting to connect to MongoDB...");

// mongoos.connect(connectionString, function(err, clientObj) {
//     if (err) {
//         console.error("Error connecting to MongoDB:", err.message);
//     } else {
//         console.log("Connected Successfully..");
//         //client.close();  // Close the connection after successful connection
//     }
// });

// const mongoose = require("mongoose")



// function dbConnect(){
//     mongoose.connect("mongodb://localhost:27017/productDB").then(connection=>{
//         console.log("database connection successfully.")
//     }).catch(err=>{
//         console.log(err)
//     })
// }
// dbConnect()


// const mongoose = require("mongoose");

// const connectionString = "mongodb://localhost:27017/";

// console.log("Attempting to connect to MongoDB...");

// mongoose.connect(connectionString)
//     .then(() => {
//         console.log("Connected Successfully.");
//         // Optional: Disconnect immediately for demonstration
//         return mongoose.disconnect();
//     })
//     .then(() => {
//         console.log("Disconnected Successfully.");
//     })
//     .catch((err) => {
//         console.error("Error connecting to MongoDB:", err.message);
//     });
// const { MongoClient } = require("mongodb");

// const connectionString = "mongodb://localhost:27017/";

// console.log("Attempting to connect to MongoDB...");

// MongoClient.connect(connectionString, { useUnifiedTopology: true })
//     .then(client => {
//         console.log("Connected Successfully.");
//         const db = client.db("testdb"); // Replace "testdb" with your database name

//         // Example operation: list collections
//         return db.listCollections().toArray()
//             .then(collections => {
//                 console.log("Collections:", collections);
//                 // Close the connection after operations are done
//                 return client.close();
//             });
//     })
//     .catch(err => {
//         console.error("Error connecting to MongoDB:", err.message);
//     });
