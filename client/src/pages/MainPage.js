import Header from "../components/Header"

import React from "react"
import Listform from "../components/Listform"
import styled from "styled-components"

const Li = styled.li`

`
function Mainpage () {
  return (
    <div>
      <div>오늘의 추천 도시락</div> 
      {/* 3항 연산자 걸어가지구 router 로 바뀔때 마다 이름 변경되게 끔 바꿔야됌 */}
      <div className="main-recommend-container">
      <Listform/>  
      <ul>
        <li>밀키트 수요 폭등</li>
        <li>박상하 만세</li>
        <li>윤선웅 만세</li>
        <li>호호호호호</li>
      </ul>
      </div>
      
    </div>
    
    
  )
}
export default Mainpage