import React from "react"
import styled from "styled-components"

const Rowul = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
const Category_name = styled.li`
 list-style: none;
 background-color: aqua;
`
function Mealkit(){
  return (
    <div>
      <form>
        <input type='text'></input>
        <button>검색</button>
      </form>
      <div className="category_container">
       
       
      
        <div className="brand">
          <Rowul>
            <Category_name>브랜드</Category_name>
            <li><a role='button'>푸드어셈블</a></li>
            <li><a role='button'>ASHLEY</a></li>
            <li><a role='button'>프레시지</a></li>
            <li><a role='button'>마이셰프</a></li>
            <li><a role='button'>아내의 셰프</a></li>
          </Rowul>
        </div>
        <div className="kcal">
          <Rowul>
          <Category_name>칼로리</Category_name>
            <li><a role='button'>200미만</a></li>
            <li><a role='button'>200~300</a></li>
            <li><a role='button'>300~400</a></li>
            <li><a role='button'>400~500</a></li>
            <li><a role='button'>500이상</a></li>
          </Rowul>
        </div>
        <div className="price">
          <Rowul>
          <Category_name>가격</Category_name>
            <li><a role='button'>2000원 미만</a></li>
            <li><a role='button'>2000원~3000원</a></li>
            <li><a role='button'>3000원~5000원</a></li>
            <li><a role='button'>5000원~10000원</a></li>
            <li><a role='button'>10000원 이상</a></li>
          </Rowul>
        </div>
       
      </div>
    </div>
  )
}




export default Mealkit