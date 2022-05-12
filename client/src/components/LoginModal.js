import React, { useState } from 'react';
import Modal from 'react-modal';
function LoginModal() {
  const [open, setOpen] = useState(true)
  return (
    <Modal isOpen={open} onRequestClose={() => setOpen(false)}>
      로그인 모달
    </Modal>
  )
}

export default LoginModal;
