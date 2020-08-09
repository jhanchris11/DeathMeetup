import React from 'react';
import User from '../../components/Profile/Profile';
import { ContainterUser } from './ContainerUser';
const Profile = () => {
	return (
		<ContainterUser>
			<User />
		</ContainterUser>
	);
};

export default Profile;
