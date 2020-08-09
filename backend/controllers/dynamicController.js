
const dynamicService = require('../services/dynamicService');

exports.getItemsSize = async (req, res) => {
  try {
    let documentSize = await dynamicService.getItemsSize(req.query.model);
    res.json({ documentSize });
  } catch (error) {
    res.status(400).send('Was there an error');
  }
};