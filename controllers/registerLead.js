const Leads = require('../models/lead');
const Courses = require('../models/course');

const registerLead = async (req, res) => {
  try {
    const { name, email, phone_number, linkedin_profile, courseId } = req.body;
    const course = await Courses.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    const lead = await Leads.create({
      name,
      email,
      phone_number,
      linkedin_profile,
      status: 'Waitlist',
      CourseId:courseId,
    });

    res.status(201).json(lead);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Course registration failed' });
  }
};

module.exports =  registerLead ;
