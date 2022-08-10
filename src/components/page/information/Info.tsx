import { Card, Form, Input, Row, Col } from "antd";
import React from "react";

const Info = () => {
  return (
    <div style={{ padding: "80px 104px 0 24px" }}>
      <Card bordered={false}>
        <Form layout="vertical">
          <Row gutter={24}>
            <Col flex="434px"></Col>
            <Col flex="auto">
              <Form.Item label="Tên người dùng">
                <Input disabled value={'Lê Quỳnh Ái Vân'} />
              </Form.Item>
              <Form.Item label="Số điện thoại">
                <Input disabled value={'0767375921'} />
              </Form.Item>
              <Form.Item label="Email:">
                <Input disabled value={'admin01@gmail.com'} />
              </Form.Item>
            </Col>
            <Col flex="auto">
              <Form.Item label="Tên đăng nhập">
                <Input disabled value={'lequynhaivan01'} />
              </Form.Item>
              <Form.Item label="Mật Khẩu">
                <Input disabled value={'123456789'} />
              </Form.Item>
              <Form.Item label="Vai trò:">
                <Input disabled value={'Kế toán'} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>    
  );
};

export default Info;