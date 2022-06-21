/*
Created by Joseph Doros
jd3545@rit.edu

Description: Pre-made cart page needs backend implemented for fully fuctioning cart adding
*/

import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement.jsx"
import Footer from "../components/Footer.jsx"
import Navagation from "../components/Navagation.jsx"
import { mobile } from "../responsive.js"

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}

`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};

`
const TopTexts = styled.div`
    ${mobile({ display: "none" })}
    
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}

`
const Info = styled.div`
    flex:3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const ProductDet = styled.div`
    flex:2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const ProductName = styled.span`
    
`
const ProductId = styled.span`
    
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`
const ProductSize = styled.span`
    
`
const PriceDet = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}

`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}

`

const Hr = styled.hr`
    background-color: #eee;
    border:none;
    height: 1px;
`
const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;

`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};

`
const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled.span`
    
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`
const Cart = () => {
    return (
        <Container>
            <Navagation />
            <Announcement />
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(4)</TopText>
                        <TopText>Your Whishlist(0)</TopText>

                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDet>
                                <Image src="https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4739000/altimages/ff_4739406-8ea3f4b179de5196a1bfalt1_full.jpg&w=900" />
                                <Details>
                                    <ProductName><b>Product:</b>RIT HOODIE</ProductName>
                                    <ProductId><b>ID:</b>92394023</ProductId>
                                    <ProductColor color="grey" />
                                    <ProductSize><b>Size:</b>Large</ProductSize>
                                </Details>
                            </ProductDet>
                            <PriceDet>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>3</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$86</ProductPrice>
                            </PriceDet>
                        </Product>
                        <Hr />

                        <Product>
                            <ProductDet>
                                <Image src="https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4611000/altimages/ff_4611465-79397e809875b3c3d943alt1_full.jpg&w=900" />
                                <Details>
                                    <ProductName><b>Product:</b>RIT HOODIE</ProductName>
                                    <ProductId><b>ID:</b>92394023</ProductId>
                                    <ProductColor color="orange" />
                                    <ProductSize><b>Size:</b>Large</ProductSize>
                                </Details>
                            </ProductDet>
                            <PriceDet>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$53</ProductPrice>
                            </PriceDet>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 139</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ - 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 139</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout Now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>

            <Footer />
        </Container>
    )
}

export default Cart