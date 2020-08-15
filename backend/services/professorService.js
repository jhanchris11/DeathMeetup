const Professor = require('../models/Professor');

exports.insertProfessor = async (professorRequest) => {
  let professor = new Professor(professorRequest);
  return await professor.save();
};
