const MongoClient = require("mongodb").MongoClient;

// создаем объект MongoClient и передаем ему строку подключения
const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/", { useNewUrlParser: true });
mongoClient.connect(function(err, client){

  const db = client.db("usersdb");
  const collection = db.collection("users");
  let user = {name: "Tom", age: 23};
  collection.insertOne(user, function(err, result){

    if(err){
      return console.log(err);
    }
    console.log(result.ops);
    client.close();
  });
});