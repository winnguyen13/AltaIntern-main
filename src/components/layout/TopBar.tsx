import { Avatar, Breadcrumb, Button, Image, Typography } from "antd";
import { Notification } from "iconsax-react";
import React, { FC, Fragment, useMemo } from "react";
import './style.css'
import avatar from "../../images/avatar.svg";
import { Link, useLocation } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

const { Text } = Typography;


const TopBar = () => {
  const location = useLocation();
  return (
    <div className='headerWrapper'>
      {/* <div>
        <Breadcrumb separator={<RightOutlined />}>{breadcrumbItems}</Breadcrumb>
      </div> */}
      <div className='avatarContainer'>
        <Button
          type="primary"
          className='notificationButton'
          shape="circle"
          icon={<Notification variant="Bold" size="20" />}
        />
        <Link to="/info" className='infoContainer'>
          <Avatar size={40} src={<Image src={avatar} preview={false} />} />
          <div className='nameContainer'>
            <Text className='hello'>Xin chào</Text>
            <Text className='name'>Lê Quỳnh Ái Vân</Text>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;