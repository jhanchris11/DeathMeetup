import React, { useState, Fragment } from 'react';
import { Form, Input, Button, notification, Modal } from 'antd';
import { useHistory } from 'react-router-dom';
import { SignUpUser } from '../../services/userService';
import logo1 from '../../assets/logo1.png';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';

const SignUp = ({ parentCallbackShow2, visible2, parentCallbackCancel2 }) => {
	const [isLoading, setLoading] = useState(false);
	const history = useHistory();
	const [visible1, setVisible1] = useState(false);

	const openNotification = (message, description) => {
		const args = {
			message: message,
			description: description,
			duration: 2,
		};
		notification.success(args);
	};
	const handleCancel = () => {
		parentCallbackCancel2();
	};
	const handlerVisible = () => {
		parentCallbackShow2();
	};
	const onFinish = async (values) => {
		setLoading(true);

		setTimeout(async () => {
			await SignUpUser(values);
			setLoading(false);
			handlerVisible(false);
			openNotification('Registrado satisfactoriamente', 'Bienvenido');
			showModalSignIn();
		}, 3000);
	};

	const showModalSignIn = () => {
		setVisible1(true);
		parentCallbackCancel2();
	};

	const handleCancelSignIn = () => {
		setVisible1(false);
		parentCallbackCancel2();
	};

	return (
		<Fragment>
			<Modal
				visible={visible2}
				title="🤝🏿"
				onOk={onFinish}
				onCancel={handleCancel}
				style={{ textAlign: 'center' }}
				footer={false}
			>
				<div className="contenedor-signup">
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

							<Form
								// style={{ width: "80%", margin: "auto" }}
								className="form-sign"
								name="basic"
								initialValues={{}}
								onFinish={onFinish}
							>
								<Form.Item
									name="name"
									rules={[{ required: true, message: 'Please insert your name!' }]}
								>
									<Input className="input" placeholder="Insert your name" />
								</Form.Item>
								<Form.Item
									name="email"
									rules={[
										{ type: 'email', message: 'email is not valid !' },
										{ required: true, message: 'Please insert your email !' },
									]}
								>
									<Input className="input" placeholder="Insert your email" />
								</Form.Item>

								<Form.Item
									name="password"
									rules={[
										{
											required: true,
											message: 'Por favor ingrese su contraseña!',
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
											Sign Up
										</Button>
										<Button>
											<Link onClick={showModalSignIn}>Sign In</Link>
											{/* <Link >Sign In</Link> */}
										</Button>
									</div>
								</Form.Item>
							</Form>
						</div>
					</div>
				</div>
			</Modal>
			<SignIn
				visible1={visible1}
				parentCallbackShow1={showModalSignIn}
				parentCallbackCancel1={handleCancelSignIn}
			/>
		</Fragment>
	);
};

export default SignUp;
