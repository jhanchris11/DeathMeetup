import React, { useContext, useEffect, Fragment } from 'react'
import ImgHome from '../../assets/home.jpg'
import { Layout, Menu, Card } from 'antd'

import logo1 from '../../assets/logo1.png'
import Show from './ShowContent/Show'
import Head from './Head/Head'
import CustomCard from '../shared/CustomCard/CustomCard'
import ListContainer from '../shared/ListContainer/ListContainer'
import Categories from '../../components/Categories/Categories'
import { MeetContainer } from '../../pages/Meet/MeetStyled'
import contextCategory from '../../context/category/categoryContext'

import FooterMain from '../Layout/Footer'
import { ContainerEvent,ContainerCategory } from './HomeStyled'

const Home = () => {
    const { categories } = useContext(contextCategory)


    return (
        <Fragment>
            <Head />
            <Show />
            <ContainerEvent>
                <h1>Eventos Cercanos</h1>
                <h2>Descubre lo que pasará proximamente cerca de ti </h2>
                <MeetContainer>
                    <CustomCard
                        headerCard={<Categories />}
                        stylesCustom={{ width: "58%" }}
                    >
                        <ListContainer
                            pageSize={5}
                            model={"Event"}
                            getItemsSizeEndpoint={"/dynamic/document-size"}
                            getItemsEndpoint={"/event/pagination"}
                            filterArray={undefined}
                            fieldToGetData={"events"}
                            hasImage={true}
                        />
                    </CustomCard>

                    <CustomCard
                        headerCard={
                            <h4 style={{ color: "whitesmoke" }}>Related Events</h4>
                        }
                        stylesCustom={{ width: "35%" }}
                    >
                        <ListContainer
                            pageSize={5}
                            model={"Event"}
                            getItemsSizeEndpoint={"/dynamic/document-size"}
                            getItemsEndpoint={"/event/pagination"}
                            filterArray={undefined}
                            fieldToGetData={"events"}
                            hasImage={false}
                        />
                    </CustomCard>
                </MeetContainer>
            </ContainerEvent>



            <ContainerCategory>
                <h1> Categorías</h1>
                <h2>Explora grupos de temas en lo que estes interesado</h2>

                <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '20px' }}>
                    {categories.map(category =>
                        <Card title={category.label} bordered={true} style={{ width: 300 }}>
                            <p>{category.value}</p>
                        </Card>
                    )}
                </div>
            </ContainerCategory>
            <FooterMain />
        </Fragment>

    )
}

export default Home
