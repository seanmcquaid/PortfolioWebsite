import React from "react";
import styled from "styled-components";
import {Navbar} from "components/components";

const Layout = ({children}) => (
    <Container>
        <Navbar/>
        {children}
    </Container>
);

const Container = styled.div`
    display : flex;
    background-color : #4C8577;
    height : 100%;
    width : 100%;
    justify-content  :center;
    align-items : center;
    @media(max-height : 600px){
        margin-top : 7rem;
    }
    @media(max-width : 520px){
        flex-direction : column;
        height : auto;
        width : auto;
        margin-top : 7rem;
    }
    @media(max-width : 975px){
        height : auto;
        width : auto;
        margin-top : 7rem;
    }
`;

export default Layout;