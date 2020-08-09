const handleError = require('../helpers/handleError');
const professorService = require('../services/professorService');

exports.insertProfessor = async (req, res) => {
  try {
    let professor = await professorService.insertProfessor(req.body);
    res.json({ professor });
  } catch (error) {
    res.status(400).send(error);
  }
};
