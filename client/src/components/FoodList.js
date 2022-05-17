import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
  min-height: 15vh;
  min-width: 10vw;
  text-align: center;
  border: 2px solid black;
`
const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  height: 5vh;
`

function FoodList({setPickFood}) {
  const list = ['닭가슴살','아메리카노','삼겹살','돈까스'] //음식 종류 데이터 받아오기
  return (
    <ContainerDiv>
      {list.map((el) => {
        return <ContentDiv onClick={() => setPickFood(el)} key={el}>{el}</ContentDiv>
      })}
    </ContainerDiv>
  )
  
}

export default FoodList;