import React from 'react';

function FoodList() {
  const list = ['닭가슴살','아메리카노','삼겹살']

  return (
    <div>
      {list.map((el) => {
        return <div key={el}>{el}</div>
      })}
    </div>
  )
  
}

export default FoodList;