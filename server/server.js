require('dotenv').config()
const express = require("express");
const workoutRouters = require('./routes/workout')

// express app
const app = express();

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workout', workoutRouters)

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("Hello port", process.env.PORT);
});
 