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
const Div4 =styled.div`
    height: 20vh;
    min-height: 100px;
    padding: 2rem;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 26vh;
    min-height: 126px;
    padding: 1.5rem;
    background-color: rgba(255, 255, 255, 0.5);
`
const Div5 =styled.div`
    flex-direction: row;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    height: 100%;
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
const Link = styled.a`
    width: 10rem;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    font-size: 1.1rem;
    font-weight: 700;
    color: rgb(255, 255, 255);
    background-color: var(--color-black);
    border-radius: 0.4rem;
    transition: all 0.5s ease 0s;
    text-decoration: none;
    box-sizing: border-box;
    letter-spacing: -0.9px;
    -webkit-font-smoothing: antialiased;
    --color-black: #3d3d3d;
`
const UL= styled.ul`
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`

const Li=styled.li`
    position: relative;
    display: inline-block;
    width: 342px;
    margin: 0 30px 70px 0;
    vertical-align: top;
    list-style: none;
    text-align: -webkit-match-parent;
`
  return(
    <Div>
      <Div2 primary={1}>
        <IMG src="img/recommendmeal1.png" ></IMG>
        <Div4>
        <Div5>
          <div>
            <h3>새우도시락</h3>
            <p>어제 막 잡은 것 같은 새우가 가득 영양밸런스도 완벽</p>
          </div>
          <Link>구매처 링크</Link>
        </Div5>
      </Div4>
      </Div2>
      <Div2 primary={2}>
        <IMG src="img/recommendmeal2.jpeg" ></IMG>
        <Div4>
        <Div5>
          <div>
            <h3>소불고기 도시락</h3>
            <p>단백질이 부족하고 기운이 없을때는 소불고기 도시락으로 영양보충!!!</p>
          </div>
          <Link>구매처 링크</Link>
        </Div5>
      </Div4>
      </Div2>
      <Div2 primary={3}>
        <IMG src="img/recommendmeal3.jpeg" ></IMG>
        <Div4>
        <Div5>
          <div>
            <h3>9찬 도시락</h3>
            <p>어느 영양분도 놓치고 싶지 않고 식이섬유를 반드시 챙기기위한 분들을 위한 도시락!!!</p>
          </div>
          <Link>구매처 링크</Link>
        </Div5>
      </Div4>
      </Div2>
      <Div2 primary={4}>
        <IMG src="img/recommendmeal4.jpeg"></IMG>
        <Div4>
        <Div5>
          <div>
            <h3>아는 맛이 무서운 도시락</h3>
            <p>비엔나 볶음과 제육볶음 음 이것은 실패할 수가 없는 조합이군요!!</p>
          </div>
          <Link>구매처 링크</Link>
        </Div5>
      </Div4>
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