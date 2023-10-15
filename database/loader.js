const sequelize = require('../database/database');
const Course = require('../models/course');
const Instructor = require('../models/instructor');
const Lead = require('../models/lead');
const Comment = require('../models/comment');

const dummyCourses = [
    {
        name: 'Backend Dev 4',
        maxSeats: 25,
        startDate: '2023-11-01',
        instructorId: 1,
    },
    {
        name: 'Backend Dev 2',
        maxSeats: 60,
        startDate: '2023-11-02',
        instructorId: 1,
    },
  ];
  
  const dummyInstructors = [
    {
      name: 'Instructor 1',
      email: 'instructor1@example.com',
    },
    {
      name: 'Instructor 2',
      email: 'instructor2@example.com',
    },
  ];
  
  const dummyLeads = [
    {
      name: 'Lead 1',
      email: 'lead1@example.com',
      phone_number: '123-456-7890',
      linkedin_profile: 'https://linkedin.com/lead1',
      status: 'Accepted',
      courseId:1,
    },
    {
      name: 'Lead 2',
      email: 'lead2@example.com',
      phone_number: '987-654-3210',
      linkedin_profile: 'https://linkedin.com/lead2',
      status: 'Rejected',
      courseId:2,
    },
  ];
  
  const dummyComments = [
    {
      text: 'Comment 1 for Lead 1',
      leadId:1,
    },
    {
      text: 'Comment 2 for Lead 1',
      leadId:2,
    },
  ];

  async function insertDummyData() {
    try {
      await sequelize.sync({ force: true });

      await Instructor.bulkCreate(dummyInstructors);

      await Course.bulkCreate(dummyCourses);

      await Lead.bulkCreate(dummyLeads);

      await Comment.bulkCreate(dummyComments);

      console.log('Dummy data inserted successfully.');
    } catch (error) {
      console.error('Error inserting dummy data:', error);
    }
  }

module.exports = insertDummyData



  