const Instructors = require('../models/instructor');

const registerInstructors = async (req, res) => {
  try {
    const { name, email } = req.body;
    const registeredInstructor = await Instructors.create({
      name,
      email,
    });
    res.status(201).json(registeredInstructor);
  } catch (err) {
    res.status(500).json({ message: 'Error creating Instructor' });
  }
};

module.exports = registerInstructors;
