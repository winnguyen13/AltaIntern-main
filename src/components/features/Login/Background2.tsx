import React from "react";
import { Row, Col } from "antd";
import './style.css'
import background from '../../images/Frame.png';

const Background2 = () => {
    return ( 
        <Col span={14} className="background1">
            <>
                <img src={background} className="background2-image"/>
            </>
        </Col>
    )
}

export default Background2