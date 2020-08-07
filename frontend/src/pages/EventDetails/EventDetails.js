import React, { useEffect, useState,Fragment } from "react";
import { useParams } from "react-router-dom";

import PageHeaderDetail from "../../components/PageHeaderDetail/PageHeaderDetail";
import CustomCard from "../../components/shared/CustomCard/CustomCard";
import { getEventById } from "../../services/eventService";

import {
  DetailContainer,
  HomeContainer,
  ImageDetail,
  ContentDetail,
  TextDetail
} from "./EventDetailsStyled";

import { Layout,List } from "antd";
import { EditOutlined } from "@ant-design/icons";

const { Content } = Layout;

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    handleGetEventId();
  }, []);

  const handleGetEventId = async () => {
    let { data } = await getEventById(eventId);
    setEvent(data["event"]);
  };

  const findFullNameProfessor = professorInfo => {
    return professorInfo.filter(item => item["key"] === "fullname");
  };

  return (
    <Fragment>
      <Content className="cl-content">
        {event && (
          <Fragment>
            <PageHeaderDetail
              title={event["title"]}
              professor={
                event["professor"]["fullName"]
              }
              releaseDate={event["releaseDate"]}
              category={event["category"]["category"]}
            />

            <HomeContainer>
              <CustomCard
                headerCard={"Details"}
                stylesCustom={{ fontSize: "1.3em", fontWeight: "bold", width: "25%"}}
              >
                <DetailContainer>
                  <ImageDetail image={event["urlImage"]} />
                  <ContentDetail>
                    <TextDetail>{event["description"]}</TextDetail>
                  </ContentDetail>
                </DetailContainer>
              </CustomCard>

              <CustomCard
                headerCard={"Professor Details"}
                stylesCustom={{ fontSize: "1.2em", fontWeight: "bold" , width: "15%"}}
              >
                <ImageDetail image={event["professor"]["urlImage"]} />
                <List
                style={{ padding: 15 }}
                  dataSource={event["professor"]["additionalInformation"]}
                  renderItem={item => (
                    <List.Item key={item.id}>
                      <List.Item.Meta
                        avatar={<EditOutlined />}
                        title={<p>{item.value}</p>}
                      />
                    </List.Item>
                  )}
                />
              </CustomCard>
            </HomeContainer>
          </Fragment>
        )}
      </Content>
    </Fragment>
  );
};

export default EventDetails;
