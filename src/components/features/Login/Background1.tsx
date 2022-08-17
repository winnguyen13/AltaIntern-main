import React from "react";
import { Row, Col } from "antd";
import './style.css'
import background from '../../../images/Group341.png';

const Background1 = () => {
    return ( 
        <Col span={14} className="background1">
            <>
                <img src={background} className="background1-image"/>
                <h1>QUẢN LÝ XẾP HÀNG</h1>
                <h2>Hệ thống</h2>
            </>
        </Col>
    )
}

export default Background1