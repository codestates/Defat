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
`;
const ConfirmBtn = styled.button`
align-self: flex-end;
margin: 20px;
margin-top: 50px;
margin-right: 150px;
`
const Input = styled.input`
margin-left: 15px;
`
function Signin() {
  return (
    <ColDiv>
    <h3>회원가입</h3>
      <RowDiv>
        <div>아이디 :</div>
        <Input type="text"></Input>
      </RowDiv>
      <RowDiv>
        <div>닉네임 :</div>
        <Input type="text"></Input>
      </RowDiv>
      <RowDiv>
        <div>비밀번호 :</div>
        <Input type="password"></Input>
      </RowDiv>
      <RowDiv>
        <div>비밀번호 확인 :</div>
        <Input type="password"></Input>
      </RowDiv>
      <ConfirmBtn>가입하기</ConfirmBtn>
    </ColDiv>
  );
}

export default Signin;