import Header from "../components/Header"

import React from "react"
import Listform from "../components/Listform"


function Mainpage () {
  return (
    <div>
      <div>오늘의 추천 밀키트</div>
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