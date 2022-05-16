import React, { useState } from 'react';
import styled from 'styled-components';
import Mypage1 from '../components/Mypage1';
import Mypage2 from '../components/Mypage2';

const ColDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid blue;
  background-color: bisque;
  height: 30rem;
  width: 15rem;
`;
const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid red;
  width: 100vw;
  flex: 3 1 auto;
`;
const ContendDiv = styled.div`
  border-bottom: 2px solid gray;
  height: 2rem;
  text-align: center;
`
const FlexEight = styled.div`
  flex: 7 1 auto;
`
function MyPage() {
  const [select, setSelect] = useState('');
  const clickList = (num) => {
    setSelect(num);
  };
  const handleClickList = (num) => {

  }
  return (
    <div>
      <RowDiv>
        <ColDiv>
          <ContendDiv onClick={() => clickList(1)}>내 정보변경</ContendDiv>
          <ContendDiv onClick={() => clickList(2)}>회원 탈퇴</ContendDiv>
        </ColDiv>
        <FlexEight>
        {select === 1 ? <Mypage1 /> : select === 2 ? <Mypage2 /> : null}
        </FlexEight>
      </RowDiv>
    </div>
  );
}

export default MyPage;
