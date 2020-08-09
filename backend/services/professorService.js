const Professor = require('../models/Professor');

exports.insertProfessor = async (professorRequest) => {
  console.log(professorRequest);
  let professor = new Professor(professorRequest);
  return await professor.save();
};
