/*
Created by Joseph Doros
jd3545@rit.edu

Description: Product page needs backend implementation for fully functioning page for checking into cart, having
single product pages for that item
*/

import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement.jsx"
import Footer from "../components/Footer.jsx"
import Navagation from "../components/Navagation.jsx"
import Newsletter from "../components/Newsletter.jsx"
import { mobile } from "../responsive.js"

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}

`

const ImgContainer = styled.div`
    flex:1;

`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}

`
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
    
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 35px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}

`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.div`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
    
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FitlerSizeOption = styled.option`
    
`
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}

`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;



`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid orange;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border:2px solid orange;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
        &:hover{
        background-color: whitesmoke;
    }
`

const Product = () => {
    return (
        <Container>
            <Navagation />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4729000/altimages/ff_4729761-15e46973617dbba23d74alt1_full.jpg&w=900" />
                </ImgContainer>
                <InfoContainer>
                    <Title>RIT Shorts</Title>
                    <Desc>State of the art RIT shorts</Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="Black" />
                            <FilterColor color="Orange" />
                            <FilterColor color="Gray" />

                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FitlerSizeOption>XS</FitlerSizeOption>
                                <FitlerSizeOption>M</FitlerSizeOption>
                                <FitlerSizeOption>L</FitlerSizeOption>
                                <FitlerSizeOption>XL</FitlerSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product