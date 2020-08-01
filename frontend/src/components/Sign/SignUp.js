import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { useHistory } from "react-router-dom";
import { SignUpUser } from '../../services/userService'
import logoMeetup from '../../assets/logo_size.jpg'
import { Link } from "react-router-dom";

const SignUp = () => {
    const [isLoading, setLoading] = useState(false);
    const history = useHistory();

    const onFinish = async values => {
        console.log(values)
        setLoading(true);
        await SignUpUser(values);
        setLoading(false);
        openNotification('Registrado satisfactoriamente', 'Bienvenido');
        history.push("/h1");
    };

    const openNotification = (message, description) => {
        const args = {
            message: message,
            description: description,
            duration: 0,
        };
        notification.success(args);
    };

    return (
        <div className='card-signin'>
            <div className="card-body-signin">
                <div className='card-image-signin'>
                    <img
                        src={logoMeetup}
                        alt="logo1"
                        className="image-signin"
                    />
                    <h3

                        style={{
                            marginBottom: 50,
                            textAlign: "center",
                            fontSize: 27
                        }}
                    >
                        Sistema Death Meetup
                        </h3>
                </div>

                <Form
                    style={{ width: "80%", margin: "auto" }}
                    name="basic"
                    initialValues={{}}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="name"
                        rules={[
                            { required: true, message: "Please insert your name!" }
                        ]}
                    >
                        <Input placeholder="Insert your name" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            { type: "email", message: "email is not valid !" },
                            { required: true, message: "Please insert your email !" }
                        ]}
                    >
                        <Input placeholder="Insert your email" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Por favor ingrese su contraseña!"
                            }
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Insert your password" />
                    </Form.Item>

                    <Form.Item >
                        <div className='card-btn-signin'>
                            <Button
                                loading={isLoading}
                                className="col text-center"
                                type="primary"
                                htmlType="submit"

                            >
                                Sign Up
                    	</Button>
                            <Button>
                                <Link to="/">Sign In</Link>
                            </Button>
                        </div>

                    </Form.Item>
                </Form>
            </div>
        </div>

    );
};

export default SignUp;