import { Divider, Space, Typography } from 'antd';
import React, { FC } from 'react';
import './style.css'

interface IButtonSide {
  content: {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    label: string;
    onClick?: () => void;
  }[];
}

const ButtonSide: FC<IButtonSide> = (props) => {
  const { content } = props;

  return (
    <div className='buttonSide'>
      <Space
        size={0}
        className='wrapper'
        direction='vertical'
        split={<Divider type='horizontal' style={{ margin: 0 }} />}
      >
        {content.map((value, index) => {
          const handleOnClick = () => {
            if (value.onClick) {
              value.onClick();
            }
          };

          return (
            <button
              key={index}
              className='button'
              onClick={handleOnClick}
            >
              <div className='content'>
                <value.icon className='icon' />
                <Typography.Text className='text'>
                  {value.label}
                </Typography.Text>
              </div>
            </button>
          );
        })}
      </Space>
    </div>
  );
};

export default ButtonSide;