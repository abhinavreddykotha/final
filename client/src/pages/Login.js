// import React,{useState} from 'react'
// import { Form, Input, message } from 'antd';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Spinner from '../components/Spinner';


// const Login = () => {
//         const [loading,setLoading] = useState(false)
//         const navigate = useNavigate
//         //form submit
//         const subitHandler = async (values) => {
//             try {
//               setLoading(true)
//              const {data} = await axios.post('/users/login', values)
//              setLoading(false)
//              message.success("login success")
//              localStorage.setItem('user', JSON.stringify({...data,password:''}))
//              navigate('/')
//             } catch (error) {
//               setLoading(false)
//               message.error('something went wrong')
//             }
//         };
//     return (
//         <>
//          <div className="login-page">
//           {loading && <Spinner />}
//         <Form layout="vertical" onFinish={ subitHandler }>
//           <h1 style={{ textAlign: 'center' }}>LOGIN FORM</h1>
//           <Form.Item label="Email" name="email">
//             <Input type="email" />
//           </Form.Item>
//           <Form.Item label="Password" name="password">
//             <Input type="password" />
//           </Form.Item>
//           <div className="d-flex justify-content-between">
//             <Link to="/register">New User? Click here to Register</Link>
//             <button className="btn btn-primary" type="submit">
//               LOGIN
//             </button>
//           </div>
//         </Form>
//       </div>   
//         </>
//     )
// }

// export default Login;
import React, { useState } from 'react';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post('/users/login', values);
      setLoading(false);
      message.success('Login successful');
      localStorage.setItem('user', JSON.stringify({ ...data.user, password: '' }));
      navigate('/');
    } catch (error) {
      setLoading(false);
      if (error.response) {
        // Server responded with an error status (e.g., 401 Unauthorized)
        message.error(error.response.data.message);
      } else {
        // Network error or other unexpected issues
        message.error('Something went wrong. Please try again later.');
      }
    }
  };
  //prevent for login user
  // useEffect(() => {
  //   if(localStorage.getItem('user')){
  //     navigate('/')
  //   }
  // }, [navigate]);

  return (
    <>
      <div className="login-page">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={submitHandler}>
          <h1 style={{ textAlign: 'center' }}>LOGIN FORM</h1>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/register">New User? Click here to Register</Link>
            <button className="btn btn-primary" type="submit">
              LOGIN
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
