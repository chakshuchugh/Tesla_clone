import React from 'react'
import styled from "styled-components"
import Section from "./Section"
function Home() {
  return (
    <Container>
        <Section
        title="Model S"
        discription="order online for touchless delivery"
        backgroundimage="model-s.jpg"
        leftButtontext="custom order"
        rightButtontext="existing inventories"
        />
        <Section
        title="Model Y"
        discription="order online for touchless delivery"
        backgroundimage="model-y.jpg"
        leftButtontext="custom order"
        rightButtontext="existing inventories"
        />
        <Section
        title="Model 3"
        discription="order online for touchless delivery"
        backgroundimage="model-3.jpg"
        leftButtontext="custom order"
        rightButtontext="existing inventories"
        />
        <Section
        title="Model X"
        discription="order online for touchless delivery"
        backgroundimage="model-x.jpg"
        leftButtontext="custom order"
        rightButtontext="existing inventories"
        />
        <Section
         title="Low Cost Solar Panels In America"
         discription="money-back gurantee"
         backgroundimage="solar-panel.jpg"
         leftButtontext="custom order"
         rightButtontext="existing inventories"
        />
        <Section
         title="Solar For New Roofs"
         discription="money-back gurantee"
         backgroundimage="solar-roof.jpg"
         leftButtontext="custom order"
         rightButtontext="existing inventories"
        />
        <Section
         title="Accessories"
         discription=""
         backgroundimage="accessories.jpg"
         leftButtontext="custom order"
         rightButtontext="existing inventories"
        />

    </Container>
  )
}

export default Home
const Container=styled.div`
   height:100vh;
`