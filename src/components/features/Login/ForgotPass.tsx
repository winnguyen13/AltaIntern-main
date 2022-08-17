import {Form, Input, Button, Row, Col, Space} from 'antd';
import React, {useState, useEffect} from "react";
import './style.css'
import Logo from './Logo'
import Background from './Background2'

const ForgotPass = () => {
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
                        <h1 className="reset-pass">Đặt lại mật khẩu</h1>
                        <h2 className="email-address">Vui lòng nhập email để đặt lại mật khẩu của bạn *</h2>
                        <Form.Item name={['user', 'email']} rules={[{type: 'email'}]}>               
                            <Input size="large" className="input-email" />
                        </Form.Item>
                        <Form.Item wrapperCol={{offset: 8, span: 16}} className="continue-cancel">     
                            <Space>
                                <Button htmlType="submit" className="cancel-button">Hủy</Button>
                                <Button htmlType="submit" className="continue-button">Tiếp tục</Button>
                            </Space>           
                        </Form.Item>
                    </Form> 
                </Row>
            </Col>
            <Background />
        </Row>
    );
};

export default ForgotPass