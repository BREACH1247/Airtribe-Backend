const LeadComments = require('../models/comment');

const addComment = async (req, res) => {
  try {
    const { leadId, text } = req.body;
    const comment = await LeadComments.create({
      LeadId:leadId,
      text
    });

    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Comment addition failed' });
  }
};

module.exports =  addComment ;
