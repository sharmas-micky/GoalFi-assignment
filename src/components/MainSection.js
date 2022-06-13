import React from 'react'
import styled from 'styled-components'
import './MainSection.css'

function Main_Section(props) {
  return (
    // <Wrapper>
    <>
        
      <Container bgcolor={props.bgcolor}>
          <Img src={props.image} alt="" />
        <Text>
      {props.title && <h1 style={{color:'#ffffff'}}>{props.title}</h1>}
          <Span className='text' textColor = {props.textColor}>{props.text}</Span>
       
        <BtnGroup>
          {props.LeftBtn && <LeftBtn>Join Us</LeftBtn>}
          {props.RightBtn &&  <RightBtn RbtColor={props.RtBtnColor}>LEARN MORE</RightBtn>}
        </BtnGroup>
        </Text>
      </Container>
      </>
    //  </Wrapper>
  )
}


const Span = styled.span`
  color: ${props => `${props.textColor}`};
`

const Container = styled.div`
  padding:4rem 4rem;
  background-color:${props => `${props.bgcolor}`};
  height:41rem;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  @media (max-width: 768px){
    flex-direction: column;
    align-items:center;
    justify-content:flex-start;
    padding:1rem 1rem;
    height:auto;
  }


`

const Img = styled.img`
  width:37rem ;
  @media (max-width: 768px){
      width:20rem ;
    }
`

const Text = styled.div`
  text-align:end;
  font-weight:bold;
  font-size:3.5rem;
  color:#ffffff;
  display:flex;
  margin:0rem 2rem;
  flex-direction:column;
  align-items:flex-end;
  @media (max-width: 768px){
    margin-top:3rem;
    font-size:2rem !important;
    text-align: center;
    align-items:center;
  }
`

const BtnGroup = styled.div`
  display:flex;
  flex-direction:row;
  padding:2rem 0rem;
  margin-top:0.5rem;

`

const LeftBtn = styled.button`
  padding:1rem 0rem;
  width:7rem;
  border-radius:6px;
  border:1px solid #ffffff;
`

const RightBtn = styled(LeftBtn)`
  margin-left:1rem;
  background:none;
  color:#ffffff;
`

export default Main_Section
