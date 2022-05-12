import React, {useState} from 'react';
import Modal from 'react-modal';
function AddFood() {
  const [open, setOpen] = useState(true)
  return (
    <Modal isOpen={open} onRequestClose={() => setOpen(false)}>
      음식추가 모달
    </Modal>
  )
}
export default AddFood;
