const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const route = 3001;

const admin = require("firebase-admin");

//credential validation key
const serviceAccount = require("./serviceAccountKey.json");

//Initialize firebase-admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

//setup middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = admin.firestore();

var jsonParser = bodyParser.json();
app.get("/getStudents", (req, res) => {
  db.collection("students")
    .get()
    .then((result) => {
      res.send(result.docs.map((doc) => doc.data()));
    });
});

app.post("/addStudent", (req, res) => {
  const { firstName, lastName, DoB } = req.body;
  console.log(firstName, lastName, DoB);
  db.collection("students")
    .add({ firstName, lastName, DoB })
    .then(() => res.send());
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
