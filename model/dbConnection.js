const MongoClient = require('mongoDb').MongoClient
const uri =
    "mongodb+srv://dbuser666:sit725DataUser@cluster0.q6kyg.mongodb.net/?retryWrites=true&w=majority";
const dbclient = new MongoClient(uri, { useNewUrlParser: true });

exports.addCollection = async function (collectionName, dataObj) {

    var dbConnection = await dbclient.connect();
    var db = await dbConnection.db('test');
    return await db.collection(collectionName).insertOne(dataObj)
    //     , function (err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    //     dbConnection.close();
    //     return true;
    // });
   // return saveData
    // dbclient.connect((err, client) => {
    //     console.log(collectionName)


    //     var db = client.db('test');
    //     projectCollection = db.collection(collectionName).insertOne(dataObj, function (err, res) {
    //         if (err) throw err;
    //         console.log("1 document inserted");
    //         client.close();
    //         return true;
    //     });
    //     if (!err) {
    //         console.log('Mongo DB COnnected');
            
    //     }
    //     else {
    //         console.log("DB Error : ", err);
    //         process.exit(1)
    //     }

    // });
}

exports.getCollection = async function (collectionName) {
    try {
        var dbConnection = await dbclient.connect();
        var db = await dbConnection.db('test');
        var collecationData = await db.collection(collectionName).find({}).toArray();
        console.log(collecationData)
        return collecationData
    } catch (error) {
        console.log(error)
    }

}