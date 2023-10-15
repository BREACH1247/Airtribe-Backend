const Instructor = require('../models/instructor')
const Courses = require("../models/course")

const updateCourse = async (req, res) => {
  try {
    const { name, maxSeats, startDate, instructorId } = req.body;
    const instrutorexists = Instructor.findOne({
      where:instructorId
    });
    if(!instrutorexists){
      res.status(404).json({error: "Instructor not found"})
    }
    const courseId = req.params.id;
    const course = await Courses.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    course.name = name || course.name;
    course.maxSeats = maxSeats || course.maxSeats;
    course.startDate = startDate || course.startDate;
    await course.save();
    res.json(course);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Course update failed' });
  }
};

module.exports = updateCourse;