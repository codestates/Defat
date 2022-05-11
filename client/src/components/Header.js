import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
    return (
      <div>
        <div id='login-header'>
          <Link to ='/'><img src='img/logo2.png'/></Link>
          <span>로그인</span>
        </div>
        <div id='menu-header'>
          <Link to='/Mealkit'> <span>MealKit</span></Link>
          <Link to='/TodayMeal'> <span>오늘의 메뉴</span></Link>
          <Link to='/MyPage'>  <span>마이 페이지</span></Link>
        
       
        </div>
      </div>
     
    )
}

export default Header