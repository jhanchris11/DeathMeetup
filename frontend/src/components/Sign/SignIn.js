import React, { useState, useContext, Fragment, useEffect } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { useHistory } from 'react-router-dom';
import { SignInUser } from '../../services/userService';
import logo1 from '../../assets/logo1.png';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import SignUp from './SignUp';
import contextCategory from '../../context/category/categoryContext';

const SignIn = ({ parentCallbackShow1, visible1, parentCallbackCancel1 }) => {
	const [visible2, setVisible2] = useState(false);
	const [isLoading, setLoading] = useState(false);
	const { user, setUser } = useContext(contextCategory);
	const history = useHistory();
	const openNotification = (message, description) => {
		const args = {
			message: message,
			description: description,
			duration: 2,
		};
		notification.success(args);
	};
	const handleCancel = () => {
		parentCallbackCancel1();
	};

	const handlerVisible = () => {
		parentCallbackShow1();
	};

	const onFinish = async (values) => {
		setLoading(true);
		console.log(values);
		setTimeout(async () => {
			const answer = await SignInUser(values);
			console.log(answer);
			const { token, id, name } = answer.data;
			console.log(token);
			localStorage.setItem('token', token);
			localStorage.setItem('userId', id);
			localStorage.setItem('name', name);
			setUser({
				token,
				auth: true,
			});
			setLoading(false);
			handlerVisible(false);
			openNotification('Registrado satisfactoriamente', 'Bienvenido');
			history.push('/event');
		}, 3000);
	};

	const showModalSignUp = () => {
		setVisible2(true);
		parentCallbackCancel1();
	};

	const handleCancelSignUp = () => {
		setVisible2(false);
		parentCallbackCancel1();
	};

	return (
		<Fragment>
			<Modal
				visible={visible1}
				title="🤝🏿"
				style={{ textAlign: 'center' }}
				onOk={onFinish}
				onCancel={handleCancel}
				footer={false}
			>
				<div className="contenedor-signin">
					<div className="card-signin">
						<div className="card-body-signin">
							<div className="card-image-signin">
								<img src={logo1} alt="logo1" className="image-signin" />
								<h3
									style={{
										textAlign: 'center',
										fontSize: 27,
									}}
								>
									Meet Learning
								</h3>
							</div>

							<Form className="form-sign" name="basic" initialValues={{}} onFinish={onFinish}>
								<Form.Item
									name="email"
									rules={[
										{ type: 'email', message: 'email is not valid !' },
										{ required: true, message: 'Please insert your email!' },
									]}
								>
									<Input className="input" placeholder="Insert your email" />
								</Form.Item>

								<Form.Item
									name="password"
									rules={[
										{
											required: true,
											message: 'Please insert your password!',
										},
									]}
									hasFeedback
								>
									<Input.Password className="input" placeholder="Insert your password" />
								</Form.Item>

								<Form.Item>
									<div className="card-btn-signin">
										<Button
											loading={isLoading}
											style={{ background: '#8bb6fb', color: 'whitesmoke' }}
											htmlType="submit"
										>
											Sign In
										</Button>
										<Button>
											<Link onClick={showModalSignUp}>Sign Up</Link>
											{/* <Link >Sign Up</Link> */}
										</Button>
									</div>
								</Form.Item>
							</Form>
						</div>
					</div>
				</div>
			</Modal>
			{visible2 && (
				<SignUp
					visible2={visible2}
					parentCallbackShow2={showModalSignUp}
					parentCallbackCancel2={handleCancelSignUp}
				/>
			)}
		</Fragment>
	);
};

export default SignIn;
