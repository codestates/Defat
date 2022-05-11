import React from "react";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Mealkit from "./pages/Mealkit";
import TodayMeal from "./pages/TodayMeal";
import MyPage from "./pages/MyPage";
import {
  BrowserRouter as Router,
  Route,Routes
} from 'react-router-dom';
import Footer from "./components/Footer";




function App() {
  return (
    <Router>
    
      <Header/>
      <Routes>
        <Route exact path ='/' element={<MainPage/>}/>
          
        
        <Route path='/Mealkit'element={<Mealkit/>}/>
          
        
        <Route path='/TodayMeal'element={<TodayMeal/>}/>
          
        
        <Route path='/MyPage'element={<MyPage/>}/>
      </Routes>

    <Footer/>
    </Router>
    
  )
}

export default App;
