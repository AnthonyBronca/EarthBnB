import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './index.css'

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
          <div id='demo-login-modal'>
          <button type='submit' className='demo-login-button'>DEMO</button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
