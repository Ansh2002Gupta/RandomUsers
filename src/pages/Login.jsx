import { useEffect, useState } from 'react';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';
import groupImage from '../assests/images/Group 1572.svg'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [img, setImg] = useState(groupImage)
  const [userFirstName, setUserFirstName] = useState('back')
  const [userLastName, setUserLastName] = useState('')
  const [visible, setVisible] = useState(true)
  const navigate = useNavigate();

  useEffect(()=>{
    localStorage.getItem('auth-token') && navigate('/Home');
  }, [])

  return (
    <div className='d-flex flex-column-reverse flex-md-row'>
      <LeftSide visible={visible} setVisible={setVisible} setImg={setImg} setUserFirstName={setUserFirstName} setUserLastName={setUserLastName}/>
      <RightSide userImage={img} userFirstName={userFirstName} userLastName={userLastName} visible={visible}/>
    </div>
  );
}

export default Login;