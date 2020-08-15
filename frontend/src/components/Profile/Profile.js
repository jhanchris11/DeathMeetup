import React, { useEffect } from 'react';
import profile from '../../assets/profile.png';
import { Card } from 'antd';
import { GetUsers } from '../../services/userService';

const { Meta } = Card;

const Profile = () => {
	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = async () => {
		const { data } = await GetUsers();
		console.log(data);
	};

	return (
		<Card
			title="Perfil"
			hoverable
			style={{
				width: 400,
				height: 400,
				textAlign: 'center',
				marginTop: '20px',
				// display: 'flex',
				// justifyContent: 'center',
				// alignItems: 'center',
			}}
			cover={<img alt="example" src={profile} />}
		>
			<Meta title="Europe Street beat" description="www.instagram.com" />
		</Card>
	);
};

export default Profile;
