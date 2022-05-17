import React, { useEffect, useState } from "react"
import styled from "styled-components"
import MealKitList from '../components/MealKitList'
import axios from 'axios'
const CategoryContainer = styled.div`
    height:100%;
    width: 100%;
    display:flex;
    flex-direction: column;
    background-color: white;
    border: 2px;
    border-color: gray;
`
const CategoryRow = styled.div`
    border: 2px;
    border-color: black;
    width:100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Category = styled.div`
    
    width:15%;
    height:100%;
    background-color: aquamarine;
`

const CategoryMenu =styled.div`
    height: 100%;
    background-color: beige;
    width:100%;
`

const TagContainer =styled.div`
    width:100%;
    background-color: blueviolet;
`
const Tag=styled.div`

`

function Mealkit(){
  const [dataList, setDataList] =useState([])
  useEffect(() => {
    axios.get("https://localhost:4000/mealkit")
    .then((resp) => {setDataList(resp.data.data)})
  },[])
  console.log(dataList[0]);
  return (
    <div>
        <CategoryContainer>
          <CategoryRow>
          <input type='text'></input>
          <button>검색</button>
          </CategoryRow>
        <CategoryRow>
            <Category>브랜드</Category>
            
              <CategoryRow>
                <CategoryMenu>잇메이트</CategoryMenu>
                <CategoryMenu>맛있닭</CategoryMenu>
                <CategoryMenu>마이비밀</CategoryMenu>
                <CategoryMenu>허닭</CategoryMenu>
              </CategoryRow>
          
        </CategoryRow>
        <CategoryRow>
            <Category>가격</Category>
        
              <CategoryRow>
                <CategoryMenu>2천원~6천원</CategoryMenu>
                <CategoryMenu>1만원~2만원</CategoryMenu>
                <CategoryMenu>3만원~4만원</CategoryMenu>
                <CategoryMenu>그 이상</CategoryMenu>
              </CategoryRow>
          
        </CategoryRow>
        <CategoryRow>
            <Category>kcal</Category>
            
              <CategoryRow>
              <CategoryMenu>100~200kcal</CategoryMenu>
              <CategoryMenu>200~300kcal</CategoryMenu>
              <CategoryMenu>300~400kcal</CategoryMenu>
              <CategoryMenu>400~500kcal</CategoryMenu>
              <CategoryMenu>500~600kcal</CategoryMenu>
              </CategoryRow>
            
        </CategoryRow>
        <TagContainer></TagContainer>
        </CategoryContainer>
      
        <div>
          {dataList.map((list) => {
           return <MealKitList list={list}/>
          })}
        </div>
      </div>
     )
}




export default Mealkit