import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './index.css'
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setErrors([]);
    setCredential('FakeUser1')
    setPassword('password2')
    return dispatch(sessionActions.login({ credential, password }))
  };

  return (
    <>
      <button  className='main-login-button' onClick={() => setShowModal(true)}>
        <img className='hamburger-menu' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png'></img>
        </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
          <div id='demo-login-modal'>
          <button type='submit' className='demo-login-button' onClick={(e) => handleSubmit(e)}>DEMO</button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
