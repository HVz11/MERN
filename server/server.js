require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRouters = require("./routes/workout");

// express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workout", workoutRouters);

//connect to DB
mongoose.connect(process.env.MONG_URI)
  .then(() => {
  // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Listening on port", process.env.PORT);
    });
  });
  
