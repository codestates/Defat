import React, { useState } from 'react';
import styled from 'styled-components';
import AddFood from '../components/AddFood';

const TodaysContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 30px;
  margin-top: 10px;
`;
const Title = styled.div`
  margin: 0px;
  padding: 0px;
`;
const FoodList = styled.div`
  padding-top: 5px;
  border-bottom: 2px solid gray;
  width: 45vw;
  height: 1.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const PushMealBar = styled.div`
  text-align: right;
  font-size: 20px;
  background-color: bisque;
  width: 45vw;
`;
const TodayTotal = styled.div`
  padding-left: 50px;
`;
const TodayTotalBar = styled.div`
  text-align: center;
  width: 45vw;
  height: 70vh;
  background-color: bisque;
`;
const BoxDiv = styled.div`
  border: 2px solid black;
  min-height: auto;
  width: 45vw;
`;
const H2 = styled.h2`
  justify-self: center;
  text-align: center;
`
function TodayMeal() {
  const [openModal, setOpenModal] = useState(false);
  const [modalNum, setModalNum] = useState(0);
  const [morning, setMorning] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const NowDate = new Date().toLocaleDateString();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const getDay = week[new Date().getDay()];

  const clickPlus = (num) => {
    setOpenModal(!openModal);
    setModalNum(num);
  };
  const removeFood = (food) => {
    console.log(food);
    if (modalNum === 1) {
      morning.splice(food,1)
      setMorning([...morning]);
    }
    if (modalNum === 2) {
      lunch.splice(food,1)
      setLunch([...lunch, food]);
    }
    if (modalNum === 3) {
      dinner.splice(food,1)
      setDinner([...dinner, food]);
    }
  };
  const addFoods = (food) => {
    if (modalNum === 1) setMorning([...morning, food]);
    if (modalNum === 2) setLunch([...lunch, food]);
    if (modalNum === 3) setDinner([...dinner, food]);
  };
  console.log(morning);
  return (
    <TodaysContainer>
      <div>
        <Title>
          <h1>마이 푸드 다이어리</h1>
          <div>{`${NowDate} ${getDay}`}</div>
        </Title>
        <br></br>
        <div>
          <BoxDiv className="아침">
            <H2>아침</H2>
            <PushMealBar onClick={() => clickPlus(1)}>
              항목 추가하기 +
            </PushMealBar>
            {openModal && modalNum === 1 ? (
              <AddFood addFoods={addFoods} />
            ) : null}
            {morning.map((food, idx) => (
              <FoodList key={idx}>
                <div>{food}</div>
                <div onClick={() => removeFood(idx)}>X</div>
              </FoodList>
            ))}
          </BoxDiv>
          <br></br>
          <BoxDiv className="점심">
            <H2>점심</H2>
            <PushMealBar onClick={() => clickPlus(2)}>
              항목 추가하기 +
            </PushMealBar>
            {openModal && modalNum === 2 ? (
              <AddFood addFoods={addFoods} />
            ) : null}
            {lunch.map((food, idx) => (
              <FoodList key={idx}>
                <div>{food}</div>
                <div onClick={() => removeFood(idx)}>X</div>
              </FoodList>
            ))}
          </BoxDiv>
          <br></br>
          <BoxDiv className="저녁">
            <H2>저녁</H2>
            <PushMealBar onClick={() => clickPlus(3)}>
              항목 추가하기 +
            </PushMealBar>
            {openModal && modalNum === 3 ? (
              <AddFood addFoods={addFoods} />
            ) : null}
            {dinner.map((food, idx) => (
              <FoodList key={idx}>
                <div>{food}</div>
                <div onClick={() => removeFood(idx)}>X</div>
              </FoodList>
            ))}
          </BoxDiv>
          <br></br>
        </div>
      </div>
      <TodayTotal className="오늘의합계">
        <h1>오늘의 합계</h1>
        <TodayTotalBar text>오늘의 합계 구현예정</TodayTotalBar>
      </TodayTotal>
      <br></br>
    </TodaysContainer>
  );
}

export default TodayMeal;
