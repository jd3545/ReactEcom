/*
Created by Joseph Doros
jd3545@rit.edu

Description: Navagation bar on the top of the page contains links to pages to go to when clicked on
*/

import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { mobile } from "../responsive.js";
import { useSelector } from "react-redux";

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}

`;
//navagation bar Left Center and right
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}

`;
const SearchContainer = styled.div`
    border: 0.25px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}

`
const Center = styled.div`
    flex:1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}

`;

const MenuLink = styled.div`
    font-style: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
    

`

const Navagation = () => {
    const quantity = useSelector(state => state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/home" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <Logo>ReactEcom</Logo>
                    </Link>
                </Center>
                <Right>
                    <Link to="/register" style={{ color: 'inherit', textDecoration: 'inherit' }}>

                        <MenuLink>
                            REGISTER
                        </MenuLink>
                    </Link>
                    <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <MenuLink>
                            SIGN IN
                        </MenuLink>
                    </Link>
                    <Link to="/cart" >
                        <MenuLink>
                            <Badge badgeContent={quantity} color="secondary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuLink>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navagation
