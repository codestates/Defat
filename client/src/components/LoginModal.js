import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';



function LoginModal() {
  const [open, setOpen] = useState(true)

  const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `
  const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

  const Logoimage = styled.img`
    width: 16vh;
    height: 16vh;
  `
  const OauthLogin = styled.div`
    margin: 4px;
    height:4vh;
    width:33vw;
    background-color: ${(props) => (props.primary === '1'? "yellow" :
                                    props.primary === '2'? "green":'tomato')} ;
    text-align: center;
    flex: auto;
    padding-top: 20px;
  `
  const Signupbutton= styled.button`
      height:4vw;
      width:8vw;
      text-align: center;
      padding:10px;
      align-items: center;
  `
  
  return (
    <Modal isOpen={open} onRequestClose={() => setOpen(false)} style={{
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
      },
      content: {
        position: 'absolute',
        top: '40px',
        left: '40px', 
        right: '40px',
        bottom: '40px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
      }
    }} >
      
     <ColumnDiv>
      <Logoimage src='img/logo.png'></Logoimage>
      <RowDiv>
      <ColumnDiv>
        <div>아이디</div>
        <div>비밀번호</div>
      </ColumnDiv>
        
      <ColumnDiv>
      <input type='text' defaultValue='아이디를 입력하세요'></input>
      <input type='password' ></input>
      </ColumnDiv>
          

      </RowDiv>
      <RowDiv>
        <input type='checkbox'></input>
        <div>로그인 유지하기</div>
        <a>아이디/비밀번호 찾기</a>
      </RowDiv>
      <OauthLogin primary='1'>카카오톡 로그인</OauthLogin>
      <OauthLogin primary='2'>네이버 로그인</OauthLogin>
      <OauthLogin >구글 로그인</OauthLogin>
      <Signupbutton>회원가입</Signupbutton>
     </ColumnDiv>
     
     
     
    </Modal>
  )
}

export default LoginModal;
