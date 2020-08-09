import React, { Fragment, useState } from 'react';
import logo1 from '../../../assets/logo1.png';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import { NavHome } from './HeadStyled.js';
import SignIn from '../../Sign/SignIn';
import SignUp from '../../Sign/SignUp';

const { Header } = Layout;

const Head = () => {
	const [visible1, setVisible1] = useState(false);
	const [visible2, setVisible2] = useState(false);
	const showModalSignIn = () => {
		setVisible1(true);
	};

	const showModalSignUp = () => {
		setVisible2(true);
	};

	const handleCancelSignIn = () => {
		setVisible1(false);
	};
	const handleCancelSignUp = () => {
		setVisible2(false);
	};

	return (
		<Fragment>
			<NavHome>
				<div className="logoHome">
					<img src={logo1} width="80" height="80" />
				</div>
				<Menu theme="dark" mode="horizontal">
					<Menu.Item key="1">
						<Link onClick={showModalSignIn}>SIGN IN</Link>
						<SignIn
							visible1={visible1}
							parentCallbackShow1={showModalSignIn}
							parentCallbackCancel1={handleCancelSignIn}
						/>
					</Menu.Item>

					<Menu.Item key="2">
						<Link onClick={showModalSignUp}>SIGN UP</Link>
						<SignUp
							visible2={visible2}
							parentCallbackShow2={showModalSignUp}
							parentCallbackCancel2={handleCancelSignUp}
						/>
					</Menu.Item>
				</Menu>
			</NavHome>
		</Fragment>
	);
};

export default Head;
