const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));

MongoClient.connect("mongoDb://localhost:27017", function (error, client) {
  if (error) {
    console.log(error);
    return;
  }
  const db = client.db("bucketdb");
  console.log("Connected to database");

  server.post("/bucketlist", function (req, res) {
    const listCollection = db.collection("list");
    const countryToSave = req.body;
    listCollection.save(countryToSave, function (err, result) {
      if (err) {
        console.log(err);
        res.status(500);
        res.send();
      }
      console.log("saved to database");
      res.status(201);
      res.json(result.ops[0]);
    });
  });

  server.get("/bucketlist", function (req, res) {
    const listCollection = db.collection("list");
    listCollection.find().toArray(function (err, alllist) {
      if (err) {
        console.log(err);
        res.status(500);
        res.send();
      }
      res.json(alllist);
    });
  });

  server.put("/bucketlist/:id", function (req, res) {
    const listCollection = db.collection("list");
    const objectID = ObjectID(req.params.id);
    const filterObject = {_id: objectID};
    const updatedData = req.body;
    listCollection.update(filterObject, updatedData, function (err, result) {
      if (err) {
        console.log(err);
        res.status(500);
        res.send();
      }
      res.status(200);
      res.json(result);
      res.send();
    });
  });

  server.delete("/bucketlist", function (req, res) {
    const listCollection = db.collection("list");
    listCollection.deleteMany({}, function (err, results) {
      if (err) {
        console.log(err);
        res.status(500);
        res.send();
      }
      res.status(200);
      res.json(results);
      res.send();
    });
  });

  server.delete('/pastas/:id', function(req, res){
  const pastaCollection = db.collection('pastas');
  const objectID = ObjectID(req.params.id);
  const filterObject = {_id: objectID};
pastaCollection.deleteOne(filterObject, function(err, result){
    if(err){
      console.log(err);
      res.status(500);
      res.send();
    }
    res.status(201);
    res.json(result);
  });
});

  server.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});
