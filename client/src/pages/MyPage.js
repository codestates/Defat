import React, { useState } from 'react';
import styled from 'styled-components';
import Mypage1 from '../components/Mypage1';
import Mypage2 from '../components/Mypage2';

function MyPage() {
  const ColDiv = styled.div`
    display: flex;
    flex-direction: column;
  `
  const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
  `
  const [select, setSelect] = useState('')
  const clickList = (num) => {
    setSelect(num)
  }
  return (
    <div>
      <RowDiv>
      <ColDiv>
      <div onClick={() =>clickList(1)}>내정보변경</div>
      <div onClick={() =>clickList(2)}>회원 탈퇴</div>
      </ColDiv>
      {select === 1? <Mypage1 />:
      select === 2? <Mypage2 /> :
      null}
      </RowDiv>
    </div>
  );
}

export default MyPage;
