/*
Created by Joseph Doros
jd3545@rit.edu

Description: Bottom of the page contains links, social media, creater, & payment types
*/

import { Email, Facebook, Instagram, Person, Pinterest, School, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive.js"

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}

`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ backgroundColor: "#f5eeee" })}

`
const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ display: "none" })}

`
const Title = styled.h3`
    margin-bottom: 30px;
    
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const CreatedBy = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;

`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ReactEcom</Logo>
                <Desc>
                    RIT Merchendise estore.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>

                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>RIT Merch Men</ListItem>
                    <ListItem>RIT Merch Women</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My account</ListItem>
                    <ListItem>Order Number</ListItem>
                    <ListItem>Items</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>

            </Center>
            <Right>
                <Title>Created By</Title>
                <CreatedBy>
                    <Person style={{ marginRight: "10px" }} /> Joseph Doros
                </CreatedBy>
                <CreatedBy>
                    <Email style={{ marginRight: "10px" }} />jd3545@rit.edu
                </CreatedBy>
                <CreatedBy>
                    <School style={{ marginRight: "10px" }} />Rochester Institute of Technology
                </CreatedBy>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />


            </Right>
        </Container>
    )
}

export default Footer