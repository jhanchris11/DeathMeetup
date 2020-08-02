exports.getItemsSize = async (model) => {
    const dynamicModel = require(`../models/${model}`);
    let size = await dynamicModel.countDocuments({});
    return {size};
}