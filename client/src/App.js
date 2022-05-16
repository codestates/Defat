import React, { useState } from 'react';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Mealkit from './pages/Mealkit';
import TodayMeal from './pages/TodayMeal';
import MyPage from './pages/MyPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import styled from 'styled-components';


const Div= styled.div`
  height : 60vw;
  min-height: 100%;
  
`
const Body =styled.div`
  height : auto;
  min-height: 100%;
  padding-bottom: 6vw;
`
function App() {
  return (
    
    <Div>
    <Router>
      <Header />
      <Body>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/Mealkit" element={<Mealkit />} />
        <Route path="/TodayMeal" element={<TodayMeal />} />
        <Route path="/MyPage" element={<MyPage />} />
      </Routes>
      </Body>
      
    </Router>
    <Footer />
    </Div>
    
  );
}

export default App;
