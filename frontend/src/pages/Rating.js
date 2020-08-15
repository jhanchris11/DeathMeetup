import React, { Fragment, useEffect, useState } from "react";
import { Layout, Input, Button } from "antd";
import { Table } from "antd";
import {  DownloadOutlined, FolderViewOutlined } from '@ant-design/icons';
import { getDataFromRating } from "../services/ratingService";
import { css } from "@emotion/core";
import Search from "antd/lib/input/Search";

const { Content } = Layout;

const LocalNetwork = () => {
  const [dataLocal, setData] = useState([]);
  const [visible, setVisible] = useState(true)

var res;
getDataFromRating().then(function(result){
    res = result; // Now you can use res everywhere
    setVisible(false)
    
    setData(res.data['message'])
    
    /*console.log(res["data"]["message"][0]["enlace"])*/
});
/*  async function getDataFromRating() {
    let result = await getDataFromRating();
    setVisible(false)
    setData(result.data);

  }

*/

  

  const columns = [
    {

      title: "title",
      dataIndex: "title",
      align: "center",
      render: text => <a>{text}</a>
    },

    {
      title: "urlEvent",
      // className: "column-money",
      dataIndex: "urlEvent",
      align: "center"
    },
    {
      title: "rating",
      // className: "column-money",
      dataIndex: "rating",
      align: "center"
    }

  ];

  return (
    <Fragment>
      <Content className="cl-content">
        
        <div className="cl-content-bg">
          <h1 style={{ fontSize: "1.8em", margin: '10px 0 20px 0' }} >Death Piece</h1>

          {!visible && <Table
            style={{ textAlign: 'center' }}

            loading={visible}
            columns={columns}
            dataSource={dataLocal}
            pagination={{ defaultPageSize: 5 }}
            bordered
            title={() => <h1 style={{ fontSize: "1.8em", marginBottom: "8px", textAlign: 'center' }}>Local Network</h1>}
          />}


        </div>
      </Content>
      
    </Fragment>
  );
};

export default LocalNetwork;
