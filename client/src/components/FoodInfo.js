import React from "react";
import styled from "styled-components";


const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`
const Div = styled.div`
  align-self: center;
  margin-bottom: 5px;
`
const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const Img = styled.img`
  margin-bottom:5px;
`
const Input =styled.input`
  margin-left: 5px;
  text-align: end;
  width: 40px;
`
function Foodinfo(){
  return (
    <ContainerDiv>
      <Img src="img/food1.jpeg"></Img>
      <Div>상품명</Div>
      <Div>영양성분</Div>
      <RowDiv>
      <Div>수량: </Div>
      <Input min={1} defaultValue={1} type='number'></Input>
      </RowDiv>
    </ContainerDiv>

  )
}

export default Foodinfo