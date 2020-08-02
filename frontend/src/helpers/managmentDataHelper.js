export const parsingCategories = categoriesResponse => {
  let newArray = [];
  categoriesResponse.map(category => {
    newArray.push({ label: category.category, value: category._id });
  });
  return newArray;
};
