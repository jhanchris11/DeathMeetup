import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { useHistory } from "react-router-dom";
import { SignUpUser, SignInUser } from '../../services/userService'
import logoMeetup from '../../assets/logo_size.jpg'
import { Link } from "react-router-dom";

const SignIn = () => {
    const [isLoading, setLoading] = useState(false);
    const history = useHistory();

    const onFinish = async values => {
        console.log(values)
        setLoading(true);
        await SignInUser(values);
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
                        name="email"
                        rules={[
                            { type: "email", message: "email is not valid !" },
                            { required: true, message: "Please insert your email!" }
                        ]}
                    >
                        <Input placeholder="Insert your email" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please insert your password!"
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
                                Sign In
                    	</Button>
                            <Button>
                                <Link to="/signup">Sign Up</Link>
                            </Button>
                        </div>

                    </Form.Item>
                </Form>
            </div>
        </div>

    );
};

export default SignIn;
