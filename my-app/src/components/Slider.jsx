/*
Created by Joseph Doros
jd3545@rit.edu

Description: Front home page slider mechanism between season apperals
leads to product page when clicked on shop now needs backend implmentation to get the apperals filtered 
*/

import styled from "styled-components"
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { sliderItems } from "../data.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { mobile } from "../responsive.js";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}

`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5 ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #c2bbbb;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Slides = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`;
const ImgContainer = styled.div`
    height: 100%;
    flex:1;
`
const Image = styled.img`
    height: 80%;
    
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBack />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slides bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Link to={`/products`}>
                                <Button>SHOW NOW</Button>
                            </Link>
                        </InfoContainer>
                    </Slides>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForward />
            </Arrow>
        </Container>
    )
}

export default Slider