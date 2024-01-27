const {MongoClient} = require("mongodb");

let uri = 'mongodb+srv://Alex3:asdf1234@cluster0.n9fends.mongodb.net/?retryWrites=true&w=majority'

// connection link to localhost = "mongodb://localhost:27017"
const url = "mongodb://localhost:27017/bookstore";

module.exports = async () => {
    const client = new MongoClient(url);
}

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://localhost:27017/bookstore')
        .then ((client) => {
            
            console.log("Connected correctly to server");
            dbconnection = client.db();
            return cb();
        })
        .catch((err) => {
            console.log("Facing this error" + err);
            return cb(err);
        })
    },

    getDb: () => dbconnection


}

