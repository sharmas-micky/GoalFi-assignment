import React from 'react'
import styled from 'styled-components'
import logo from '../images/Group.png'

function Header() {
  return (
    <Wrapper>
      <Container>
      <Logo>
        <img src={logo} style={{maxWidth:'8rem'}} alt="" />
        </Logo>  
        <Hbtn>
          <a href="/" style={{color:'#000000',textDecoration:'none',fontSize:'1rem',alignText:'center'}}>
            <BtnTxt>GET STARTED</BtnTxt>
          </a>
        </Hbtn>
      
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: black;
  // position:fixed;
  position:sticky;
  top:0;
  z-index:1;
  width:100%;
`
const Container = styled.div`
   display:flex;
   flex-wrap:wrap;
   justify-content:space-between;
   padding:1.5rem 4rem;
   align-items:center;
   @media (max-width: 768px){
    padding:2rem 2rem;
  }
`
const Logo = styled.div`
`
const Hbtn = styled.div`
  background: linear-gradient(-45deg, #F8E097, #C4A65B, #F8E097, #C4A65B, #F8E097) !important;
  border-radius:8px !important;
  margin:6px 0px;
  height:40px;


`

const BtnTxt = styled.div`
  max-width:auto;
  margin:12px;
`

export default Header
