/*
Created by Joseph Doros
jd3545@rit.edu

Description: Login page needs backend implementation for fully functioning page
*/

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { login } from "../redux/apiCalls.js";
import { mobile } from "../responsive.js";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgb(225,225,225,0.5), rgb(225,225,225,0.5)), url("https://static.helixbeta.com/86619/prod/cms/614/apparel-hero/apparel_hero.png"), center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
    
    
`
const Form = styled.form`
    display: flex;
    flex-direction: column;

`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color: orange;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`
const Error = styled.span`
    color: red;
`
const Linka = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user)

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password })
    }
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                    <Input placeholder="passowrd" type="password" onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleClick} disabled={isFetching}>Login</Button>
                    {error && <Error>
                        Wrong username or password
                    </Error>}
                    <Linka>FORGOT PASSWORD?</Linka>
                    <Link to="/register" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <Linka>CREATE NEW ACCOUNT</Linka>
                    </Link>

                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login