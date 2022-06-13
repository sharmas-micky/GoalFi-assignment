import React from 'react'
import image3 from '../images/Illustration.png';
import styled from 'styled-components'

function Section1() {
  return (
    <div className='illustration-img' style={{backgroundColor:'black'}}>
    <h1 style={{textAlign:'center',color:'white',marginTop:'1rem'}}>Goal Based planning</h1>
    <Img className='illustration' src={image3} alt="" />
    </div>
  )
}

const Img = styled.img`
    width:66rem;
    @media (max-width: 768px){
        max-width:25rem ;
      }
`

export default Section1
