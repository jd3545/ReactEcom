/*
Created by Joseph Doros
jd3545@rit.edu

Description: Top bar announcement
*/

import styled from "styled-components"
const Container = styled.div`
    height: 30px;
    background-color: orange;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 500;
`;
export const Announcement = () => {
    return (
        <Container>
            Student Discount Sale
        </Container>
    )
}

export default Announcement
