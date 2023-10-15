const Course = require('../models/course');

const createCourse = async (req, res) => {
  try {
    const { name, maxSeats, startDate, instructorId } = req.body;
    const course = await Course.create({
      name,
      maxSeats,
      startDate,
      instructorId,
    });
    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Course creation failed' });
  }
};

module.exports =  createCourse ;
