import React from "react";
import { Menu, Badge, Layout } from "antd";
import CustomDropDown from "../../shared/CustomDropDown/CustomDropDown";
import { BellOutlined } from "@ant-design/icons";

import logoMeetup from "../../../assets/logo_size.jpg";

import { HeaderChild, LogoContainer } from "./HeaderStyled";
import './HeaderStyle.scss';

const { Header } = Layout;

const HeaderSecundario = () => {
  return (
    <Header className="headerCustom">
      <HeaderChild>
        <LogoContainer>
          <img src={logoMeetup} height={64} />
        </LogoContainer>

        <Menu mode="horizontal">
          <Menu.Item key="1" className="menu-item-icon" style={{ marginBottom : 7}}>
            <Badge count={99}>
              <span>Notifications</span>
              <BellOutlined />
            </Badge>
          </Menu.Item>

          <Menu.Item key="2">
            <CustomDropDown userName={"Jesus"} email={"jesus@gmail.com"} />
          </Menu.Item>
        </Menu>
      </HeaderChild>
    </Header>
  );
};

export default HeaderSecundario;
