import React, { useState } from "react"
import styled from "styled-components"
import AddFood from '../components/AddFood'

function TodayMeal(){
  const BarDiv = styled.div`
    width: 100vh;
    height: 3vh;
    text-align: center;
    border: 1px solid gray;
    background-color: gray;
    /* border-radius: 50;
    background: linear-gradient(to right, #fd746c, #ff9068) */
  `
  const PushMealBar = styled(BarDiv)`
    text-align: right;
    background-color: bisque;
  `
  const [openModal, setOpenModal] = useState(false)
  const [modalNum, setModalNum] = useState(0)
  const clickPlus = (num) => {
    setOpenModal(!openModal)
    setModalNum(num)
  }
  return (
    <div>
      <div className='하루권장칼로리'>
        <div>하루권장칼로리</div>
        <BarDiv className='바'>1550/2100</BarDiv>
      </div>
      <br></br>
      <div className='아점저'>
        <div className='아침'>
          아침
          <PushMealBar onClick={() => clickPlus(1)}>+</PushMealBar>
          <div>닭가슴살 250kcal</div>
          <div>우유 150kcal</div>
        </div>
        <br></br>
        <div className='점심'>
          점심
          <PushMealBar onClick={() => clickPlus(2)}>+</PushMealBar>
          <div>닭가슴살 250kcal</div>
          <div>우유 150kcal</div>
        </div>
        <br></br>
        <div className='저녁'>
          저녁
          <PushMealBar onClick={() => clickPlus(3)}>+</PushMealBar>
          <div>닭가슴살 250kcal</div>
          <div>우유 150kcal</div>
        </div>
        <br></br>
        <div className='오늘의합계'>
          오늘의 합계
          <PushMealBar text>오늘의 합계 구현예정</PushMealBar>
        </div>
      </div>
      {openModal? <AddFood/>:null}
      <br></br>
    </div>
  )
}




export default TodayMeal