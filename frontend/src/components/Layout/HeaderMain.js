import React, { Fragment } from 'react';
import Header from './Header/Header';
const HeaderMain = (props) => {
	return (
		<Fragment>
			<Header />
			<Fragment>{props.children}</Fragment>
		</Fragment>
	);
};

export default HeaderMain;
