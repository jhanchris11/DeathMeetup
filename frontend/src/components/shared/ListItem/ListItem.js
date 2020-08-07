import React, { Fragment } from "react";

import { List } from "antd";
import { MessageOutlined, LikeOutlined } from "@ant-design/icons";

import { getTimeOfDate } from "../../../helpers/managmentDataHelper";

import { ItemContainer } from "./ListItemStyled";
import { CustomIcon } from "../CustomIcon/CustomIcon";
import CustomTime from ".././CustomTime/CustomTime";

const ListItem = ({ item, hasImage, isSortedByDate }) => {
  return (
    <Fragment>
      <ItemContainer>
        {
          isSortedByDate && <CustomTime>{getTimeOfDate(item['releaseDate'])}</CustomTime>
        }

        <List.Item
          key={item.title}
          style={{width: "inherit"}}
          actions={[
            <CustomIcon
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />,
            <CustomIcon
              icon={MessageOutlined}
              text="2"
              key="list-vertical-message"
            />
          ]}
          extra={
            hasImage && (
              <img width={150} height={100} alt="logo" src={item.urlImage} />
            )
          }
        >
          <List.Item.Meta
            title={<a href={'/event/' + item._id}>{item.title}</a>}
            description={item.description}
          />
        </List.Item>
      </ItemContainer>
    </Fragment>
  );
};

export default ListItem;
