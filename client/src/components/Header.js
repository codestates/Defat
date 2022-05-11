import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
function Header() {
  const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
`;
  const Img = styled.img`
    width: 16vh;
    height: 7vh;
  `
  const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `
  const ListDiv = styled.div`
  background-color: gray;
  flex: auto;
  color: black;
  text-align: center;
  width: 33vw;
  padding: 10px;
  `
  return (
    <div>
      <Div>
        <Link to="/">
          <Img src="img/logo2.png" />
        </Link>
        <Button>로그인</Button>
      </Div>
      <Div>
        <Link to="/Mealkit">
          <ListDiv>MealKit</ListDiv>
        </Link>
        <Link to="/TodayMeal">
          <ListDiv>오늘의 메뉴</ListDiv>
        </Link>
        <Link to="/MyPage">
          <ListDiv>마이 페이지</ListDiv>
        </Link>
      </Div>
    </div>
  );
}

export default Header;
