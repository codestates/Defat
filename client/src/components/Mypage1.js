import React, { useState } from 'react';
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
const Button = styled.button`
  border: 0;
  padding: 0;
  width: 5rem;
  border-right: ${(props) => props.right ? '2px solid black': null};
  background-color: ${(props => props.clicked ? 'grey':null)};
  transition: 0.5s;
`
function Mypage1() {
  const [gender, setGender] = useState('')//기본값 서버에서 받아온 유저 성별
  const [workout, setWorkout] = useState('')
  const handleSetGender = (gender) => {
    setGender(gender)
  }
  const handleSetWorkout = (num) => {
    setWorkout(num)
  }
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
        <Button right={true} onClick={() =>handleSetGender(1)} clicked={gender === 1? true: false}>남</Button>
        <Button onClick={() => handleSetGender(2)} clicked={gender === 2? true: false}>여</Button>
      </RowDiv>
      <RowDiv>
        <div>운동량 : </div>
        <Button right={true} onClick={() => handleSetWorkout(1)} clicked={workout === 1? true: false}>거의 안함</Button>
        <Button right={true} onClick={() => handleSetWorkout(2)} clicked={workout === 2? true: false}>주 1~2회</Button>
        <Button onClick={() => handleSetWorkout(3)} clicked={workout === 3? true: false}>거의 매일</Button>
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
