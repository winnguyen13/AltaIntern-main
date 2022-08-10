import { Badge, Typography } from 'antd';
import './style.css';


interface props {
    type: 'success' | 'waiting' | 'error' | 'used';
    text: string;
}

var color = {
    success: "#34CD26",
    waiting: "#4277FF",
    used: "#7E7D88",
    error: "#EC3740",
}

const index = ({ text, type }: props) => {
  return (
    <div className='container'>
        <Badge color={color[type]} text={<Typography.Text className='text'>{text}</Typography.Text>} />
    </div>
  )
}

export default index