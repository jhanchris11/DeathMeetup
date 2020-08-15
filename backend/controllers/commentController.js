const handlerError = require('../helpers/handleError');
const commentService = require('../services/commentService');
exports.getComments = async (req, res) => {
  try {
    let comments = await commentService.getComments();
    res.json({ comments });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.insertComments = async (req, res) => {
  let { state, errors } = handlerError.withErrorRequest(req);

  if (state) return res.status(400).json({ error: errors.array() });

  try {
    const newComment = await commentService.insertComments(req.body);

    res.json({ newComment });
  } catch (error) {
    res.status(400).send(error);
  }
};
