import React from "react";
import styled from "styled-components";



function Foodinfo(){
  return (
    <div>
      <img src="img/food1.jpeg"></img>
      <div>넘모넘모 맛있는 도시락</div>
      <div>영양성분</div>
      <div>수량</div>
      <input min={1} type='number'></input>
      <button>추가</button>
    </div>

  )
}

export default Foodinfo