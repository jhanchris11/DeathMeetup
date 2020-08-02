import React, { Fragment, useState, useEffect, useContext } from "react";
import { Checkbox } from "antd";
import { getCategories } from "../../services/categoryService";

import { parsingCategories } from "../../helpers/managmentDataHelper";
import contextCategory from '../../context/category/categoryContext';

const CheckboxGroup = Checkbox.Group;

const Categories = () => {
  const { categories,categoriesSelected,setCategories,setCategoriesSelected } = useContext(contextCategory);

  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  useEffect(()=>{
    handleCategories();
  },[]);

  const handleCategories = async () => {
    let { data } = await getCategories();
    let categoriesParsed = parsingCategories(data['categories'])
    setCategories(categoriesParsed);
  }

  const onChange = categoriesSelected => {
    setCategoriesSelected(categoriesSelected);
    setIndeterminate(
      !!categoriesSelected.length && categoriesSelected.length < categories.length
    );
    setCheckAll(categoriesSelected.length === categories.length);
  };

  const onCheckAllChange = e => {
    setCategoriesSelected(e.target.checked ? categories : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <Fragment>
      <div className="site-checkbox-all-wrapper">
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Categories
        </Checkbox>
      </div>
      <br />
      <CheckboxGroup
        options={categories}
        value={categoriesSelected}
        onChange={onChange}
      />
    </Fragment>
  );
};

export default Categories;
