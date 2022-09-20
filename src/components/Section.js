import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section({title,discription,leftButtontext,rightButtontext, backgroundimage}) {
  return (
    <Wrap bgimage={backgroundimage}>
          <Fade bottom>
            <ItemText>
              <h1>
                {title}
              </h1>
              <p>{discription}</p>
           </ItemText>
           </Fade>

        <ButtonGroup>
          <Fade bottom>
            <LeftButton>
                {leftButtontext}
            </LeftButton>
            <RightButton>
                {rightButtontext}
            </RightButton>
            </Fade>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg"/>
    
    </Wrap>
  )
}

export default Section

const Wrap=styled.div`
  width:100%;
  height:100%;
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  background-image:url('images/model-s.jpg');
  justify-content:space-between;
  background-image: ${props=>`url("/images/${props.bgimage}")`}
`

const ItemText=styled.div`
  padding-top:100px;
  text-align:center;
`

const ButtonGroup=styled.div`
   text-align:center;
   display:flex;
   flex-direction:row;
   margin-top:300px;
   margin-left:370px;
   
   @media screen and (min-width:768px)and(max-width:820px){
    margin-top:200px;
    margin-left:270px;
   }

  
   @media(max-width:425px){
    flex-direction:column;
    align-items:center;
    display:flex;
    margin-left:26px;
    margin-top:180px;
   }
   
   @media(max-width:768px){
    flex-direction:column;
    align-items:center;
    display:flex;
    margin-left:26px;
    margin-top:180px;
   }
`
const LeftButton=styled.div`
background-color: rgba(23, 26, 32, 0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:capitalize;
font-size:12px;
cursor:pointer;
margin-left:8px;
margin-bottom:10px;
@media(max-width:768px){
  
}

`

const RightButton=styled(LeftButton)`
background:white;
opacity:0.6;
color:black;

`
const DownArrow=styled.img`
   margin-bottom:10%;
   height:50px;
   margin-right:-12px;
   animation: animateDown infinite 1.5s;
   @media(max-width:768px){
    margin-top:40px;
   }
   @media(max-width:425px){
    margin-top:40px;
   }
   
`