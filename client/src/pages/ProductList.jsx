/*
Created by Joseph Doros
jd3545@rit.edu

Description: Product list page(products), displays filtering option needs backend implementation to work 
in addition single-pages for specific item needs backend implemented
*/

import styled from "styled-components"
import Announcement from "../components/Announcement.jsx"
import Footer from "../components/Footer.jsx"
import Navagation from "../components/Navagation.jsx"
import Newsletter from "../components/Newsletter.jsx"
import Products from "../components/Products.jsx"
import { mobile } from "../responsive.js"

const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0% 20px", display: "flex", flexDirection: "column" })}

`

const FilterText = styled.span`
    font-style: 20px;
    font-weight: 600;
    margin-right: 28px;
    ${mobile({ marginRight: "0px" })}

`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}

`
const Option = styled.option`
    
`
const ProductList = () => {
    return (
        <Container>
            <Navagation />
            <Announcement />
            <Title>RIT Merchandise</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>
                            White
                        </Option>
                        <Option>
                            Black
                        </Option>
                        <Option>
                            Red
                        </Option>
                        <Option>
                            Blue
                        </Option>
                        <Option>
                            Orange
                        </Option>
                        <Option>
                            Yellow
                        </Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option >Price (asc)</Option>
                        <Option >Price (desc)</Option>

                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList