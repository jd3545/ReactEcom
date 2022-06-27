/*
Created by Joseph Doros
jd3545@rit.edu

Description: Product boxes that displays the products from Products can be edited in data.js
located below the categories in home page
*/

import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Link } from "react-router-dom";
import styled from "styled-components"

const Info = styled.div`
opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;


`;
const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: relative;

    &:hover ${Info}{
        opacity: 1;

    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: wheat;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition:all 0.5s ease;

    &:hover{
        background-color: whitesmoke;
        transform: scale(1.1);
    }

`;

const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Link to={`/product/${item._id}`}>
                    <Icon>
                        <ShoppingCartOutlined />
                    </Icon>
                </Link>
                <Link to={`/product/${item._id}`}>
                    <Icon>
                        <SearchOutlined />
                    </Icon>
                </Link>
                <Link to="/product/ID_HERE" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
                </Link>
            </Info>
        </Container>
    )
}

export default Product