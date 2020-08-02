import React, { Fragment,  } from "react";
import { Layout } from "antd";
import FooterMain from "../components/Layout/Footer";
import Breadcrumb from "../components/Layout/Content";

import Banner from "../components/Banner/Banner";
import Search from "../components/Search/Search";

const { Content } = Layout;
const Profile = () => {
    return (
        <Fragment>
            <Content className="cl-content">
                <Banner />
                <Search />
                <div className="cl-content-bg">
                </div>
            </Content>
            <FooterMain />
        </Fragment>
    );
};

export default Profile;
