const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userSchema");
const app = express();
var cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from your frontend
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoURI = "mongodb://localhost:27017/linktree";

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.get("/get", async (req, res) => {
  let { email } = req.query;
  let data = await User.findOne({ email: email });
  console.log(data);
  res.send(data);
});

app.post("/", (req, res) => {
  let data = req.body;
  const newuser = new User({
    name: data.name,
    email: data.email,
    photoUrl: data.photourl,
    Url: data.photourl,
    instagramUrl: data.instagramUrl,
    facebookUrl: data.facebookUrl,
    twitterUrl: data.twitterUrl,
    linkedUrl: data.linkedUrl,
    username: data.username,
  });
  newuser.save();

  console.log(newuser);
});

app.listen(3000, () => {
  console.log("app is listing on port 3000");
});
