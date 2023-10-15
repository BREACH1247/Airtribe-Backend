const Leads = require('../models/lead');
const updateLeadStatus = async (req, res) => {
  try {
    const { leadId } = req.params;
    const { status } = req.body;
    const lead = await Leads.findOne({
      where: leadId,
    })
    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }
    lead.status = status;
    await lead.save();

    res.status(200).json(lead);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lead status update failed' });
  }
};

module.exports =  updateLeadStatus ;
