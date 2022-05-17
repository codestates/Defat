import axios from 'axios';
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
`;
const ConfirmBtn = styled.button`
  align-self: flex-end;
  margin: 20px;
  margin-top: 50px;
`;
const Input = styled.input`
  margin-left: 15px;
`;

function Mypage2() {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [checkPwd, setCheckPwd] = useState('');

  const handleChangeId = (e) => {
    setId(e.target.value);
  };
  const handleChangePwd = (e) => {
    setPwd(e.target.value);
  };
  const handleChangeCheckPwd = (e) => {
    setCheckPwd(e.target.value);
  };
  const withdrawal = () => {
    axios.delete(`https://localhost:4000/mypage:${id}`)
    .then((resp) => alert('탈퇴 성공'))
  };
  return (
    <ColDiv>
      <h3>회원탈퇴</h3>
      <RowDiv>
        <div>아이디 :</div>
        <Input type="text" onChange={handleChangeId}></Input>
      </RowDiv>
      <RowDiv>
        <div>비밀번호 :</div>
        <Input type="password" onChange={handleChangePwd}></Input>
      </RowDiv>
      <RowDiv>
        <div>비밀번호 확인 :</div>
        <Input type="password" onChange={handleChangeCheckPwd}></Input>
      </RowDiv>
      <ConfirmBtn onClick={withdrawal}>탈퇴하기</ConfirmBtn>
    </ColDiv>
  );
}

export default Mypage2;
