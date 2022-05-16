import React,{useState} from "react";
import styled from "styled-components";



function Listform () {
  const [imgnum,setImgnum] =useState(1)
  
   const leftbutton=()=>{
     if(imgnum===1){
       setImgnum(4)
     } else{
        setImgnum(imgnum-1)
     }
   }
   const rightbutton=()=>{
     if(imgnum===4){
        setImgnum(1)
     }else{
        setImgnum(imgnum+1)
     }
   }
  
  const IMG = styled.img`
  
    width: 100%;
    height: 100%;
    
    object-fit: cover;
`

const Div = styled.div`
    width: 100%;
    height: 80vh;
    position: relative;
`

const Div2 =styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: ${(props)=>(props.primary===imgnum ? 1:0)};
`
const Div3 = styled.div`
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 1200px;
    width: 100%;
    height: 5rem;
    margin: 0px auto;
    
`

const Button = styled.button`
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 3rem;
    height: 5rem;
    font-size: 1.5rem;
    background: rgba(0, 0, 0, 0.4);
    border: none;
`
const Button2 = styled.button`
cursor: pointer;
position: absolute;
top: 50%;
transform: translateY(-50%);
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
width: 3rem;
height: 5rem;
font-size: 1.5rem;
background: rgba(0, 0, 0, 0.4);
border: none;
right:0px;
`

const Svgleft = styled.img`
    stroke: currentcolor;
    fill: currentcolor;
    stroke-width: 0;
    height: 1em;
    width: 1em;
    
`
console.log(imgnum)

  return(
    <Div>
      <Div2 primary={1}>
        <IMG src="img/recommendmeal1.png" ></IMG>
      </Div2>
      <Div2 primary={2}>
        <IMG src="img/recommendmeal2.jpeg" ></IMG>
      </Div2>
      <Div2 primary={3}>
        <IMG src="img/recommendmeal3.jpeg" ></IMG>
      </Div2>
      <Div2 primary={4}>
        <IMG src="img/recommendmeal4.jpeg"></IMG>
      </Div2>
      <Div3>
        <Button onClick={leftbutton}>
          <Svgleft src='img/left-arrow.svg' ></Svgleft>
        </Button>
        <Button2 onClick={rightbutton}>
          <Svgleft src='img/right-arrow.svg'></Svgleft>
        </Button2>
      </Div3>
    </Div>
  )
}

export default Listform