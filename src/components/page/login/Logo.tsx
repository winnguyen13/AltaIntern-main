import { Row } from "antd";
import React from "react";
import './style.css'
import logo from '../../../images/Logoalta.png';

const Logo = () => {
    return (
        <Row>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
        </Row>
    )
}

export default Logo