import React, { Fragment, useState } from 'react';
import logo1 from '../../../assets/logo1.png';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { NavHome } from './HeadStyled.js';
import SignIn from '../../Sign/SignIn';
import SignUp from '../../Sign/SignUp';

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
				<Menu style={{ background: '#8BB6FB' }} mode="horizontal">
					<Menu.Item key="1">
						<Link onClick={showModalSignIn} style={{ color: '#ffffff' }}>
							SIGN IN
						</Link>
						<SignIn
							visible1={visible1}
							parentCallbackShow1={showModalSignIn}
							parentCallbackCancel1={handleCancelSignIn}
						/>
					</Menu.Item>

					<Menu.Item key="2">
						<Link onClick={showModalSignUp} style={{ color: '#ffffff' }}>
							SIGN UP
						</Link>
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
