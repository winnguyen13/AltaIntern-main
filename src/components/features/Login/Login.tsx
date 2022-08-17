import {Form, Input, Button, Row, Col} from 'antd';
import React, {useState, useEffect} from "react";
import './style.css'
import Logo from './Logo'
import Background from './Background1'

interface Size {
    width: number;
    height: number;
}
function useWindowSize(){
    const [windowSize, setWindowSize] = useState<Size>({
        width: 1,
        height: 1
    })
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}
    
const Login = () => {
    const size = useWindowSize();
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Row className='container'>
            <Col span={10} className="login">
                <Logo />
                <Row className="login-input">
                    <Form
                        labelCol={{span: 24}}
                        wrapperCol= {{span: 24}}
                        initialValues={{remember: true}}
                        autoComplete="off"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        className="login-inputbox"
                    >
                        <h2 className="login-name">Tên đăng nhập *</h2>
                        <Form.Item name="username" rules={[{required: true, message: 'Nhập tên đăng nhập của bạn'}]}>               
                            <Input size="large" className="login-username" />
                        </Form.Item>
                        <h2 className="login-pass">Mật khẩu *</h2>
                        <Form.Item name="password" rules={[{required: true, message: 'Nhập mật khẩu của bạn'}]}>               
                            <Input.Password size="large" className="login-password" />
                        </Form.Item>
                        <Form.Item>               
                            <a className="forgot-pass">Quên mật khẩu ?</a>
                        </Form.Item>
                        <Form.Item wrapperCol={{offset: 8, span: 16}}>                
                            <Button htmlType="submit" className="login-button">Đăng nhập</Button>
                        </Form.Item>
                    </Form> 
                </Row>
            </Col>
            <Background />
        </Row>
    );
};

export default Login
