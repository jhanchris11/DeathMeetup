import React from 'react'
import ImgHome from '../../assets/home.jpg'
import { Layout, Menu } from 'antd'
import logo1 from '../../assets/logo1.png'
const { Header } = Layout
const Home = () => {
    return (
        <div className='container-home'>
            <Header className='nav-home'>
                <div className='logoHome'>
                    <img src={logo1} width='55' height='55' />
                </div>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key='1'>SignIn</Menu.Item>
                    <Menu.Item key='2'>SignUp</Menu.Item>
                </Menu>
            </Header>
            <div className='container-show'>
                <div className='show-text'>
                    <h1 >Death Meetup</h1>
                    <h2> Plataforma para compartir conocimientos de tecnlogia, deporte , cultura de manera gratuita 🤝🏿 creado por el grupo Evil 4</h2>
                </div>
                <div className='show-image'>
                    <img src={ImgHome} width='750px' height='550px' />
                </div>
            </div>
        </div>
    )
}

export default Home
