import React, { useEffect, useState, Fragment, useContext } from "react";
import { List, Pagination } from "antd";

import { getItems, getItemsSize } from "../../../services/dynamicService";
import ListItem from "../ListItem/ListItem";

import { PaginationContainer } from "./ListContainerStyled";
import contextCategory from "../../../context/category/categoryContext";

const ListContainer = ({
  pageSize,
  model,
  getItemsSizeEndpoint,
  getItemsEndpoint,
  filterArray,
  fieldToGetData,
  hasImage
}) => {
  const { categoriesSelected } = useContext(contextCategory);

  const [pageState, setPageState] = useState(1);
  const [itemsSize, setItemsSize] = useState(null);
  const [items, setItems] = useState(null);

  useEffect(() => {
    handleGetItemsSize(model);
    handleGetItems(1, pageSize, filterArray);
  }, []);

  useEffect(() => {
    if (categoriesSelected.length > 0) {
      handleGetItemsSize(model);
      handleGetItems(1, pageSize, categoriesSelected);
    }
  }, [categoriesSelected]);

  const handlePagination = async page => {
    await handleGetItems(page, pageSize, filterArray);
    setPageState(page);
  };

  const handleGetItems = async (page, limit, filterArray) => {
    let { data } = await getItems(getItemsEndpoint, page, limit, filterArray);
    setItems(data[fieldToGetData]);
  };

  const handleGetItemsSize = async model => {
    let { data } = await getItemsSize(getItemsSizeEndpoint, model);
    setItemsSize(data["documentSize"]["size"]);
  };

  return (
    <Fragment>
      {itemsSize && items && (
        <Fragment>
          <List
            itemLayout="vertical"
            size="large"
            dataSource={items}
            renderItem={item => <ListItem item={item} hasImage={hasImage} />}
          />

          <PaginationContainer>
            <Pagination
              defaultCurrent={pageState}
              defaultPageSize={pageSize}
              onChange={handlePagination}
              total={itemsSize}
            />
          </PaginationContainer>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ListContainer;
