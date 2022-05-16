import React from 'react';
import styled from 'styled-components';

  const ColDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
  const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
    padding-bottom: 10px;
    border-bottom: 2px solid gray;
    width: 80vw;
  `
  const ConfirmBtn = styled.button`
  align-self: flex-end;
  margin: 20px;
  margin-top: 50px;
`
const Input = styled.input`
  margin-left: 15px;
`
function Mypage1() {
  return (
    <ColDiv>
      <h3>내 정보변경</h3>
      <RowDiv>
        <div>키 : </div>
        <Input type="text"></Input>
      </RowDiv>
      <RowDiv>
        <div>몸무게 : </div>
        <Input type="text"></Input>
      </RowDiv>
      <RowDiv>
        <div>성별 : </div>
        <button>남</button>
        <button>여</button>
      </RowDiv>
      <RowDiv>
        <div>운동량 : </div>
        <button>거의 안함</button>
        <button>주 1~2회</button>
        <button>거의 매일</button>
      </RowDiv>
      <RowDiv>
        <div>기초대사량 : </div>
        <div>2100kcal</div>
      </RowDiv>
      <ConfirmBtn>확인</ConfirmBtn>
    </ColDiv>
  );
}

export default Mypage1;
