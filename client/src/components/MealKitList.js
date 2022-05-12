import React from 'react';
import styled from 'styled-components';
const IMG = styled.img`
  width: 8vh;
  height: 8vh;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

function MealKitList() {
  return (
    <Div>
      <Div2>
        <IMG src="img/logo.png"></IMG>
        <div>상품명</div>
      </Div2>
      <Div2>
        <IMG src="img/logo.png"></IMG>
        <div>상품명</div>
      </Div2>
      <Div2>
        <IMG src="img/logo.png"></IMG>
        <div>상품명</div>
      </Div2>
      <Div2>
        <IMG src="img/logo.png"></IMG>
        <div>상품명</div>
      </Div2>
      <Div2>
        <IMG src="img/logo.png"></IMG>
        <div>상품명</div>
      </Div2>
    </Div>
  );
}

export default MealKitList;
