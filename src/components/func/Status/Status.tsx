import { Badge, Typography } from 'antd';
import React, { FC } from 'react';
import './style.css'

interface IStatus {
  type: 'success' | 'waiting' | 'error' | 'used';
  text: string;
}

const color = {
  success: '#34CD26',
  waiting: '#4277FF',
  used: '#7E7D88',
  error: '#EC3740',
};

const Status: FC<IStatus> = (props) => {
  const { text, type } = props;
  return (
    <div className='container'>
      <Badge
        color={color[type]}
        text={<Typography.Text className='text'>{text}</Typography.Text>}
      />
    </div>
  );
};

export default Status;