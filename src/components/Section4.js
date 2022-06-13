import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import Card from './Card';

function Section(props) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    let slide=2
    if(w>600){
      slide = 4
    }
    else{
      slide = 2;
    }
    const settings = {
        // dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: slide,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
  return (
    <>
    <div style={{textAlign:'center'}}>
    <Title> 
            {props.title}
        </Title>
    </div>
      <Container>
       
        <Slider
          {...settings}>
          
           <Card name={'shamras'}
              company={'microsoft'}
              BtnTxt={'Book a call'}
           />
         
          
          <Card name={'shamras'}
              company={'microsoft'}
              BtnTxt={'Book a call'}/>
         
          <Card name={'shamras'}
              company={'microsoft'}
              BtnTxt={'Book a call'}/>
          
          <Card name={'shamras'}
              company={'microsoft'}
              BtnTxt={'Book a call'}/>
          
          <Card name={'shamras'}
              company={'microsoft'}
              BtnTxt={'Book a call'}/>
         
          <Card name={'shamras'}
              company={'microsoft'}
              BtnTxt={'Book a call'}/>
         
        </Slider>
      </Container>
      </>
  )
}

const Container = styled.div`
  // display:flex;
  // flex-direction:column;
  // align-items:center;
`

const Title = styled.text`
  width:100%;
  text-align:center;
  font-size:3rem;
  font-weight:bold;
  color:blue;
  @media (max-width: 768px){
    font-size:2rem;
  }

`

export default Section;
