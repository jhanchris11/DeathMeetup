import React from 'react';
import { Menu, Badge, Layout } from 'antd';
import CustomDropDown from '../../shared/CustomDropDown/CustomDropDown';
import { BellOutlined } from '@ant-design/icons';

import logo1 from '../../../assets/logo1.png';

import { HeaderChild, LogoContainer } from './HeaderStyled';
import './HeaderStyle.scss';

const { Header } = Layout;

const HeaderSecundario = () => {
	return (
		<Header className="headerCustom">
			<HeaderChild>
				<LogoContainer>
					<img src={logo1} height={80} />
				</LogoContainer>

				<Menu style={{ background: '#8BB6FB' }} mode="horizontal">
					<Menu.Item key="1" className="menu-item-icon">
						<Badge count={99}>
							<span
								style={{ color: 'whitesmoke', fontWeight: 600, fontSize: '16px', marginRight: '6px' }}
							>
								Notifications
							</span>
							<BellOutlined />
						</Badge>
					</Menu.Item>

					<Menu.Item key="2" style={{ color: 'whitesmoke', fontWeight: 600, fontSize: '16px' }}>
						<CustomDropDown userName={localStorage.getItem('name')} email={'jesus@gmail.com'} />
					</Menu.Item>
				</Menu>
			</HeaderChild>
		</Header>
	);
};

export default HeaderSecundario;
