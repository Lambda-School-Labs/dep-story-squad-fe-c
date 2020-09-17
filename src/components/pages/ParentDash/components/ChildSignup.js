import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout } from 'antd';

// Signup form to add children to parent account
const ChildSignup = () => {
  const { push } = useHistory();
  const { Header, Content } = Layout;
  const [signup, setSignup] = useState({
    username: '',
    grade: '',
    pin: '',
    dys: false,
  });

  useEffect(() => {}, [signup]);

  const handleChange = e => {
    e.persist();
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
  };

  const handleToggle = () => {
    setSignup({
      ...signup,
      dys: !signup.dys,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    push('/login');
    console.log('sent', signup);
  };

  return (
    <Layout className="parent-layout" style={{ background: 'white' }}>
      <Header className="parent-header" style={{ background: 'white' }}>
        <h1 style={{ fontFamily: 'Bangers' }}>Add a Child</h1>
      </Header>
      <Content>
        <div className="signupForm">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={signup.username}
            />
            <input
              type="dropdown"
              name="grade"
              placeholder="Select Grade"
              onChange={handleChange}
              value={signup.grade}
            />
            <input
              type="text"
              name="pin"
              placeholder="Set PIN"
              onChange={handleChange}
              value={signup.pin}
            />
            <div className="dysBtn">
              <label>Dyslexia</label>
              <label className="switch">
                <input type="checkbox" onChange={handleToggle} />
                <span className="slider round"></span>
              </label>
            </div>
            <input className="subBtn" type="submit" value="Add Child" />
          </form>
        </div>
      </Content>
    </Layout>
  );
};

export default ChildSignup;
