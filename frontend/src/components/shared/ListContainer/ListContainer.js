import React, { useEffect, useState, Fragment, useContext } from "react";
import { List, Pagination } from "antd";

import { getItems, getItemsSize } from "../../../services/dynamicService";
import ListItem from "../ListItem/ListItem";

import { PaginationContainer,TitleContainer } from "./ListContainerStyled";
import contextCategory from "../../../context/category/categoryContext";
import {
  groupByDay,
  filterFalseItem,
  converToDailyDate
} from "../../../helpers/managmentDataHelper";

import CustomButton from "../CustomButton/CustomButton";

const ListContainer = ({
  pageSize,
  model,
  getItemsSizeEndpoint,
  getItemsEndpoint,
  filterArray,
  fieldToGetData,
  hasImage,
  isSortedByDate
}) => {
  const { categoriesSelected } = useContext(contextCategory);

  const [pageState, setPageState] = useState(1);
  const [itemsSize, setItemsSize] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    handleGetItemsSize(model);
    handleGetItems(1, pageSize, filterArray);
  }, []);

  useEffect(() => {
    if (!isSortedByDate && categoriesSelected.length > 0) {
      handleGetItemsSize(model);
      handleGetItems(1, pageSize, categoriesSelected);
    }
  }, [categoriesSelected]);

  useEffect(()=>{
    isSortedByDate && handleGetItems(pageState, pageSize, undefined);
  },[pageState]);

  const handleGroupByDay = data => {
    let dataGrouped = groupByDay(data);
    setItems(dataGrouped);
  };

  const handlePagination = async page => {
    await handleGetItems(page, pageSize, filterArray);
    setPageState(page);
  };

  const handleGetItems = async (page, limit, filterArray) => {
    let { data } = await getItems(getItemsEndpoint, page, limit, filterArray);

    if (isSortedByDate) {
      let newData = [...filterFalseItem(items), ...data[fieldToGetData]];
      handleGroupByDay(newData);
    } else {
      setItems(data[fieldToGetData]);
    }
  };

  const handleGetItemsSize = async model => {
 
    let { data } = await getItemsSize(getItemsSizeEndpoint, model);
    setItemsSize(data["documentSize"]["size"]);
  };

  const showMore = () => {
     setPageState(pageState + 1);
  };

  return (
    <Fragment>
      { itemsSize != 0 && items.length > 0 && (
        <Fragment>
          <List
            itemLayout="vertical"
            size="large"
            dataSource={items}
            renderItem={item => (
              <div style={{ padding: 15 }}>
                {isSortedByDate && (typeof item == "string") && <TitleContainer>{converToDailyDate(item)}</TitleContainer>}
                {(typeof item != "string") && (
                  <ListItem
                    item={item}
                    hasImage={hasImage}
                    isSortedByDate={isSortedByDate}
                  />
                )}
              </div>
            )}
          />

          {!isSortedByDate && (
            <PaginationContainer>
              <Pagination
                defaultCurrent={pageState}
                defaultPageSize={pageSize}
                onChange={handlePagination}
                total={itemsSize}
              />
            </PaginationContainer>
          )}

          {isSortedByDate && filterFalseItem(items).length != itemsSize && (
            <div style={{ display: "flex", justifyContent: "center", padding: 15 }}>
              <CustomButton parentCallBack={showMore} text={"Mostrar mas"}/>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ListContainer;
