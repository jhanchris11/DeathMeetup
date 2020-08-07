import React from "react";

import { HeaderDetailContainer } from "./PageHeaderDetailStyled";

import { converToDailyDate } from "../../helpers/managmentDataHelper";
import { PageHeader,Button,Descriptions } from "antd";

const PageHeaderDetail = ({ title, professor, releaseDate, category }) => {
  return (
    <HeaderDetailContainer>
      <PageHeader
        ghost={false}
        title={title}
        extra={[<Button key="1">I will attend</Button>]}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Professor">{professor}</Descriptions.Item>
          <Descriptions.Item label="Release Date">
            {converToDailyDate(releaseDate.split('T')[0])}
          </Descriptions.Item>
          <Descriptions.Item label="Category">{category}</Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </HeaderDetailContainer>
  );
};

export default PageHeaderDetail;
