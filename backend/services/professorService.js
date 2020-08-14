const Professor = require('../models/Professor');

exports.insertProfessor = async (professorRequest) => {
  let professor = new Professor(professorRequest);
  return await professor.save();
};

exports.getProfessorByCategory = async (category) => {
  return await Professor.findOne({category});
};
