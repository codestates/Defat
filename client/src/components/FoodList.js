import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
  min-height: 15vh;
  min-width: 10vw;
  text-align: center;
  border: 2px solid black;
`
const ContentDiv = styled.div`
  border-bottom: 2px solid black;
`
function FoodList({setPickFood}) {
  const list = ['닭가슴살','아메리카노','삼겹살']
  return (
    <ContainerDiv>
      {list.map((el) => {
        return <div onClick={() => setPickFood(el)} key={el}>{el}</div>
      })}
    </ContainerDiv>
  )
  
}

export default FoodList;