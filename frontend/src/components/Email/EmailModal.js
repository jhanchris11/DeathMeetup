import React, { useState, useContext, Fragment, useEffect } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { useHistory } from 'react-router-dom';
import logo1 from '../../assets/logo1.png';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import { SendEmail } from '../../services/emailService';

const EmailModal = ({ parentCallbackModalEmail, visible1, parentCancelModalEmail }) => {
	const [isLoading, setLoading] = useState(false);

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
		parentCancelModalEmail();
	};

	const handlerVisible = () => {
		parentCallbackModalEmail();
	};

	const onFinish = async (values) => {
		values.url = 'http://localhost:3000/meet/5f26586f1f5a1265707b2f70';
		console.log(values);
		setLoading(true);
		await SendEmail(values);
		setTimeout(async () => {
			setLoading(false);
			handlerVisible(false);
			openNotification('Correo enviado satisfactoriamente', 'Correcto');
			history.push('/event');
		}, 3000);
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
						<div className="card-body-signin" style={{ height: '350px', minWidth: '350px' }}>
							<div className="card-image-signin">
								<img src={logo1} alt="logo1" className="image-signin" />
								<h3
									style={{
										textAlign: 'center',
										fontSize: 27,
									}}
								>
									Email Meet Learning
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

								<Form.Item>
									<div className="card-btn-signin">
										<Button
											loading={isLoading}
											style={{ background: '#8bb6fb', color: 'whitesmoke' }}
											htmlType="submit"
										>
											Send Email
										</Button>
									</div>
								</Form.Item>
							</Form>
						</div>
					</div>
				</div>
			</Modal>
		</Fragment>
	);
};

export default EmailModal;
