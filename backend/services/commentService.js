//CREATE MODEL COMMENTS -CONECTADO AL EVENTO
const Comment = require('../models/Comment');
/*EVENTO -  */

/*3 CAMPOS - USER , CREACION , DESCRIPCION - UNIDO CON ID DEL EVENTO */
//AGREGAR COMENTARIO
//LISTAR COMENTARIO
exports.getComments = async () => {
  return await Comment.find(
    {},
    { event: 0, deletedAt: 0, _id: 0, __v: 0 }
  ).populate('user', 'name');
};
exports.insertComments = async (commentEvent) => {
  let comment = new Comment(commentEvent);
  let dataComment = await comment.save();
  return await Comment.find(
    { _id: dataComment._id },
    { event: 0, deletedAt: 0, _id: 0, __v: 0 }
  ).populate('user', 'name');
};
