const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionUrl =
  "mongodb+srv://shivam:1234@cluster0.ljlrg2q.mongodb.net/?retryWrites=true&w=majority";
const database = "task-manager";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log(error);
      return console.log("Unable to connect");
    }
    console.log("Connected");
    const db = client.db(database);
    db.collection("users").insertMany(
      [
        {
          name: "shivam",
          age: 19,
        },
        {
          name: "shivam",
          age: "20",
        },
        {
          name: "shivam",
          age: 21,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Error");
        }
        console.log(result.acknowledged);
      }
    );
    db.collection("users")
      .find({ name: "shivam" })
      .toArray((_, users) => {
        console.log(users);
      });
  }
);
const routers = require("./routes/mainRoutes");
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routers);
app.listen(1235);
