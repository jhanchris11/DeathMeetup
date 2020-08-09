import React, { Fragment, useState } from 'react'
import logo1 from '../../../assets/logo1.png'
import { Link } from 'react-router-dom'
import { Layout, Menu, Button } from 'antd';
import './NavHome.scss';
import SignIn from '../../Sign/SignIn';
import SignUp from '../../Sign/SignUp';

const { Header } = Layout



const Head = () => {
    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const showModalSignIn = () => {
        setVisible1(true)
    }

    const showModalSignUp = () => {
        setVisible2(true)
    }

    const handleCancelSignIn = () => {
        setVisible1(false)
    }
    const handleCancelSignUp = () => {
        setVisible2(false)
    }

    const sign = ['SIGN IN', 'SIGN UP']

    return (
        <Fragment>
            <Header className='nav-home'>
                <div className='logoHome'>
                    <img src={logo1} width='80' height='80' />
                </div>
                <Menu theme="dark" mode="horizontal" >
                    <Menu.Item key='1'>

                        {/* <Link to='/signin'>SIGNIN</Link> */}
                        <Link onClick={showModalSignIn}>
                            {sign[0]}
                        </Link>
                        <SignIn visible1={visible1} parentCallbackShow1={showModalSignIn} parentCallbackCancel1={handleCancelSignIn} />

                    </Menu.Item>

                    <Menu.Item key='2'>
                        <Link onClick={showModalSignUp}>{sign[1]}</Link>
                        <SignUp visible2={visible2} parentCallbackShow2={showModalSignUp} parentCallbackCancel2={handleCancelSignUp} />
                    </Menu.Item>

                </Menu>
            </Header>


        </Fragment>
    )
}

export default Head
