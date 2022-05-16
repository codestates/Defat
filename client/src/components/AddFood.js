import React, {useState} from 'react';
import styled from 'styled-components';
import Foodinfo from './FoodInfo';
 const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  background-color: gray;
`
 const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px;
 `
 const Input = styled.input`
  margin-right: 5px;
`
function AddFood() {
  return (
    <ContainerDiv>
      <RowDiv>
      <Input type='text'></Input>
      <button>검색</button>
      </RowDiv>
      <Foodinfo></Foodinfo>
      <RowDiv>
      <button>추가하기</button>
      </RowDiv>
      </ContainerDiv>
  ) 
}
export default AddFood;
