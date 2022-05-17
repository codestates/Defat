import React from 'react';
import styled from 'styled-components';
const IMG = styled.img`
  align-items: center;
  width: 8vh;
  height: 8vh;
`;

const Ul = styled.ul`
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`;

const Li = styled.li`
    position: relative;
    display: inline-block;
    height:400px;
    width: 280px;
    margin: 0 30px 30px 0;
    list-style: none;
    vertical-align: top;
`;

const MealContainer = styled.div`
  padding:5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  width:100%;
  height:100%;
  background-color: aliceblue;
`
const NameandPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 125px;
  width:80%;
  height:50%;
`

function MealKitList({list}) {
  return (
    <Ul>
      <Li>
        <MealContainer>
        <IMG src={list.image}></IMG>
        <div>{list.kit_name}</div>
        <NameandPrice>
          <div>{list.brand}</div>
          <div>{list.price}</div>
        </NameandPrice>
        </MealContainer>
      </Li>
    </Ul>
  );
}

export default MealKitList;
