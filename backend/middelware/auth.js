const jwt = require('jsonwebtoken');
const config = require('../config/index');

exports.auth = async (req, res, next) => {
  const authHeader = req.get('Authorization');

  if (!authHeader) {
    const error = new Error('No autenticado,no hay JWT');
    error.status.Code = 401;
    throw error;
  }

  const token = authHeader.split(' ')[1];
  let revisarToken;

  try {
    revisarToken = jwt.verify(token, config.secret);
  } catch (error) {
    error.statusCode = 500;
    throw error;
  }

  //Si hay un token valido pero hay un error
  if (!revisarToken) {
    const error = new Error('No autenticado');
    error.statusCode = 401;
    throw error;
  }
  next();
};
