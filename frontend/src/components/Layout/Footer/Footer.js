import React from 'react';
import { Layout } from 'antd';
import { ContainerFooter } from './FooterStyled';
const { Footer } = Layout;
const FooterMain = () => {
	return (
		<>
			<div style={{ height: '150px', overflow: 'hidden' }}>
				<svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
					<path
						d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
						style={{ stroke: 'none', fill: '#8BB6FB' }}
					></path>
				</svg>
			</div>
			<ContainerFooter>
				<Footer className="cl-footer" style={{ background: '#8BB6FB', color: 'whitesmoke', fontSize: '30px' }}>
					Innovation ©2020 Created by Group Evil 4 !
				</Footer>
			</ContainerFooter>
		</>
	);
};

export default FooterMain;
