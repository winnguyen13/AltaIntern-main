import {Form, Input, Button, Row, Col, Space} from 'antd';
import React, {useState, useEffect} from "react";
import './style.css'
import Logo from './Logo'
import Background from './Background2'

const ResetPass = () => {
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
                        className="login-inputbox"
                    >
                        <h1 className="reset-pass">Đặt lại mật khẩu mới</h1>
                        <h2 className="login-pass">Mật khẩu</h2>
                        <Form.Item name="password" rules={[{required: true, message: 'Nhập mật khẩu của bạn'}]}>               
                            <Input.Password size="large" className="login-password" />
                        </Form.Item>
                        <h2 className="login-pass">Nhập lại mật khẩu</h2>
                        <Form.Item name="password-again" rules={[{required: true, message: 'Nhập lại mật khẩu của bạn'}]}>               
                            <Input.Password size="large" className="login-password" />
                        </Form.Item>
                        <Form.Item wrapperCol={{offset: 8, span: 16}}>                
                            <Button htmlType="submit" className="login-button">Xác nhận</Button>
                        </Form.Item>
                    </Form> 
                </Row>
            </Col>
            <Background />
        </Row>
    );
};

export default ResetPass