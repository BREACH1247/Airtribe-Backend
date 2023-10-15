const Leads = require('../models/lead');
const searchLeads = async (req, res) => {
  try {
    const { name, email } = req.query;
    let whereClause = {};

    if (name) {
      whereClause.name = name;
    }

    if (email) {
      whereClause.email = email;
    }

    const leads = await Leads.findAll({
      where: whereClause,
    });

    res.status(200).json(leads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lead search failed' });
  }
};

module.exports =  searchLeads ;
