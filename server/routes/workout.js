const express = require("express");

const router = express.Router();

// GET ALL WORKOUTS
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});

//GET a Single Workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a Single Workout" });
});

//POST a new workout
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new workout" });
});

//DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a workout" });
});

//UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a workout" });
});

module.express = router;
