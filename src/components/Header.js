import React,{useState} from 'react'
import styled from 'styled-components'



function Header() {
    const[burgerStatus,setBurgerStatus]=useState(false);
  return (
    <Container>
        <a>
            <img src="/images/logo.svg" alt=""></img>
        </a>
        <Menu>
            <p><a href="#">Model S</a></p>
            <p><a href="#">Model 3</a></p>
            <p><a href="#">Model X</a></p>
            <p><a href="#">Model Y</a></p>
        </Menu>
        <RightMenu>
            <p><a href="#">Shop</a></p>
            <p><a href="#">Tesla Account</a></p>
            <CustomMenu onClick={()=>setBurgerStatus(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></CustomMenu>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
            <CustomClose  onClick={()=>setBurgerStatus(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>
            </CustomClose>
            <li><a href="">Existing Inventory</a></li>
            <li><a href="">Used Inventory</a></li>
            <li><a href="">Trade-in</a></li>
            <li><a href="">Test-drive</a></li>
            <li><a href="">Insurance</a></li>
            <li><a href="">Cybertruck</a></li>
            <li><a href="">Roadester</a></li>
            <li><a href="">Semi</a></li>
            <li><a href="">Charging</a></li> 
            <li><a href="">Powerwall</a></li>
            <li><a href="">Commercial sEnergy</a></li>
            <li><a href="">Utilities</a></li>
            <li><a href="">Find Us</a></li> 
            <li><a href="">Support</a></li>
            <li><a href="">Invester Relation</a></li>
        </BurgerNav>
       
    </Container>
  )
}

export default Header

const Container=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
left :0;
right:0;
z-index:1;
`
const Menu=styled.div`
display:flex;
align-items :center;
justify-content:center;
flex:1;


p{
    text-transform:capitalize;
    padding: 0 10px;
    font-weight :800px;
    flex-wrap:nowrap;
    color:black;
}
@media(min-width:412px)and(max-width:915px){
    display:none;
}

@media(min-width:768)and(max-width:820){
    display:none;
}
`

const RightMenu=styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-left:-10%;
p{
    text-transform:uppercase;
    padding:0 10px;
}
`
 const CustomMenu=styled.div`
 margin:-10px;
 padding:-10px;
 margin-top:-9px;
 font-weight:800px;
 margin-left:2px;
 cursor:pointer;
 `

 const BurgerNav=styled.div`
 position:fixed;
 top:0;
 bottom:0;
 right:0;
 background:white;
 width:300px;
 list-style:none;
 padding:20px;
 text-align:start;
 transform:${ props => props.show ? 'translateX(0)':'translateX(100%)'};
 transition:transform 0.2s ease-in;
 li{
    padding:15px 0;
    border-bottom:1px solid

 } 
 /* @media(max-width:768px){
    display:none;
 } */
 `
 const CustomClose=styled.div`
 text-align:end;
 cursor:pointer;
 `
