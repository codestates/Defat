import React, {useState} from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import Foodinfo from './FoodInfo';



function AddFood() {
  const [open, setOpen] = useState(true)
  return (
    <Modal isOpen={open} onRequestClose={() => setOpen(false)}>
      <input type='text'></input>
      <button>검색</button>
      <Foodinfo></Foodinfo>
    </Modal>
  ) 
}
export default AddFood;
