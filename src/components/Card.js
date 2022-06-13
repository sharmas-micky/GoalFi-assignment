import React from 'react'
import styled from 'styled-components'
import profile from '../images/sample-profile.png'
import twitter from '../images/twitter--v1.png'
import instagram from '../images/instagram-logo-png-black.png'
import whatsapp from '../images/whatsapp--v2.png'

function Card(props) {
  return (
    
      <Container>
          <Img1 src={profile} alt="" />
          <Socials>
              <Img2 src={twitter} alt="" />
              <Img2 src={instagram} alt="" />
              <Img2 src={whatsapp} alt="" />
          </Socials>
          <Name>{props.name}</Name>
          <Company>{props.company}</Company>
          <Button>{props.BtnTxt}</Button>
      </Container>
    
  )
}

const Container = styled.div`
  margin:1rem;
  height:20rem;
  padding:1.5rem;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`
const Img1 = styled.img`
  width:8rem;
  height:8rem;
  border-radius:50%;

`
const Socials = styled.div`
  display:flex;
  justify-content:space-evenly;
  width: -webkit-fill-available;
  margin:1rem 3rem;

`
const Img2 = styled.img`
  width:1.5rem;
  border-radius:8px
 
`
const Name = styled.text`
  font-size:1.5rem;
`
const Company = styled.text``

const Button = styled.button`
  padding:1rem;
  width:100%;
  height:3rem;
  font-size:1rem;
  border-radius:7px;
  border:none;
  margin-top:8px;
  background-color:blue;
  color:white;
`

export default Card;
