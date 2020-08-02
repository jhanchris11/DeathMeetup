import React, { Fragment } from "react";

import { List } from "antd";
import { MessageOutlined, LikeOutlined } from "@ant-design/icons";

import { CustomIcon } from "../CustomIcon/CustomIcon";

const ListItem = ({ item, hasImage }) => {
  return (
    <Fragment>
      <List.Item
        key={item.title}
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
        extra={hasImage && <img width={150} height={100} alt="logo" src={item.urlImage} />}
      >
        <List.Item.Meta
          title={
            <p>{item.title}</p>
          }
          description={item.description}
        />
      </List.Item>
    </Fragment>
  );
};

export default ListItem;
