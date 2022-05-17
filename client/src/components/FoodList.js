import React from 'react';

function FoodList({setPickFood}) {
  const list = ['닭가슴살','아메리카노','삼겹살']
  return (
    <div>
      {list.map((el) => {
        return <div onClick={() => setPickFood(el)} key={el}>{el}</div>
      })}
    </div>
  )
  
}

export default FoodList;