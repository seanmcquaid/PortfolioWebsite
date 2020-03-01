import React from "react";
import styled from "styled-components";
import Navbar from "components/Navbar/Navbar";

const Layout = props => {
    return (
        <Container>
            <Navbar/>
            {props.children}
        </Container>
    )
};

const Container = styled.div`
    display : flex;
    flex-direction : row;
    height : 100%;
    width : 100%;
    min-height: 100%;
    min-width : 100%;
    position : absolute;
    background-color : #4C8577;
`;

export default Layout;