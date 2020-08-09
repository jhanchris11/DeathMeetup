import React, { Fragment } from "react";

import CustomCard from "../../components/shared/CustomCard/CustomCard";
import ListContainer from "../../components/shared/ListContainer/ListContainer";

import { Layout } from "antd";
const { Content } = Layout;

const Home = () => {
  return (
    <Fragment>
      <Content className="cl-content">
        <CustomCard headerCard={"Eventos"} stylesCustom={{ width: "70%", margin: "50px auto" }}>
          <ListContainer
            pageSize={3}
            model={"Event"}
            getItemsSizeEndpoint={"/dynamic/document-size"}
            getItemsEndpoint={"/event/pagination"}
            filterArray={undefined}
            fieldToGetData={"events"}
            hasImage={true}
            isSortedByDate={true}
          />
        </CustomCard>
      </Content>
    </Fragment>
  );
};

export default Home;
