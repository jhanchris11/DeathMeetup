const mongoose = require('mongoose');

exports.parsingFilterArray = (filter) => {
  if (filter != undefined || filter != null) {
    let newArray = [];
    filter.forEach((item) => {
      newArray.push(mongoose.Types.ObjectId(item));
    });
    return newArray;
  }
  return filter;
};
