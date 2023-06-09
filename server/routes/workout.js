const express = require("express");
const Workout = require("../models/workoutModel");

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
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
