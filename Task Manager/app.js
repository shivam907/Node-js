const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const validator = require("validator");

const app = express();
const mongoose = require("mongoose");
const routers = require("./routes/mainRoutes");
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routers);
// app.listen(1235);
mongoose.connect(
  "mongodb+srv://shivam:1234@cluster0.ljlrg2q.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    // useCreateIndex: true,
  }
);

const User = mongoose.model("User", {
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  age: {
    type: Number,
    trim: true,
    validate(value) {
      if (!value > 18) {
        throw new Error("Age less than 18");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.includes("password")) {
        throw new Error("password wrong");
      }
    },
  },
});

const me = new User({
  name: "shivam",
  email: "shivam@c.com",
  age: 19,
  password: "Sh  iv@9",
});

me.save()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
// const MongoClient = mongodb.MongoClient;

// const connectionUrl =
//   "mongodb+srv://shivam:1234@cluster0.ljlrg2q.mongodb.net/?retryWrites=true&w=majority";
// const database = "task-manager";

// MongoClient.connect(
//   connectionUrl,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       console.log(error);
//       return console.log("Unable to connect");
//     }
//     console.log("Connected");
//     const db = client.db(database);
//     db.collection("users").insertMany(
//       [
//         {
//           name: "shivam",
//           age: 19,
//         },
//         {
//           name: "shivam",
//           age: "20",
//         },
//         {
//           name: "shivam",
//           age: 21,
//         },
//       ],
//       (error, result) => {
//         if (error) {
//           return console.log("Error");
//         }
//         console.log(result.acknowledged);
//       }
//     );
//     db.collection("users")
//       .find({ name: "shivam" })
//       .toArray((_, users) => {
//         console.log(users);
//       });
//   }
// );
