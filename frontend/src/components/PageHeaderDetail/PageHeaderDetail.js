import React, { useState } from 'react';

import { HeaderDetailContainer } from './PageHeaderDetailStyled';

import { converToDailyDate } from '../../helpers/managmentDataHelper';
import { PageHeader, Button, Descriptions } from 'antd';
import EmailModal from '../Email/EmailModal';

const PageHeaderDetail = ({ title, professor, releaseDate, category }) => {
	const [visible1, setVisible1] = useState(false);
	const handlerModalEmail = () => {
		setVisible1(true);
	};
	const handleCancelModalEmail = () => {
		setVisible1(false);
	};
	return (
		<HeaderDetailContainer>
			<PageHeader
				ghost={false}
				title={title}
				extra={[
					<Button key="1" onClick={handlerModalEmail}>
						Enviar reunion por correo
					</Button>,
					<EmailModal
						visible1={visible1}
						parentCallbackModalEmail={handlerModalEmail}
						parentCancelModalEmail={handleCancelModalEmail}
					/>,
				]}
			>
				<Descriptions size="small" column={3}>
					<Descriptions.Item label="Professor">{professor}</Descriptions.Item>
					<Descriptions.Item label="Release Date">
						{converToDailyDate(releaseDate.split('T')[0])}
					</Descriptions.Item>
					<Descriptions.Item label="Category">{category}</Descriptions.Item>
				</Descriptions>
			</PageHeader>
		</HeaderDetailContainer>
	);
};

export default PageHeaderDetail;
