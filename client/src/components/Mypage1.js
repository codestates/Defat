import React from 'react';
import styled from 'styled-components';

function Mypage1() {
  const ColDiv = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <ColDiv>
      <div>내 정보변경</div>
      <div>
        <div>키</div>
        <input type="text"></input>
      </div>
      <div>
        <div>몸무게</div>
        <input type="text"></input>
      </div>
      <div>
        <div>성별</div>
        <div>남/녀</div>
      </div>
      <ColDiv>
        <div>운동량</div>
        <div>거의 안함</div>
        <div>주 1~2회</div>
        <div>거의 매일</div>
      </ColDiv>
      <div>
        <div>기초대사량</div>
        <div>2100kcal</div>
      </div>
      <button>확인</button>
    </ColDiv>
  );
}

export default Mypage1;
