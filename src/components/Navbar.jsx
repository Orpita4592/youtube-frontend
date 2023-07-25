import React from "react";
import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";

const Container = styled.div`
position:sticky;
top: 0;
background-color:${({theme}) => theme.bgLighter};
height:55px; 
`;
const Wrapper= styled.div`
display: flex;
align-items:center;
justify-content: flex-end;
height: 100 % ;
padding: 5px 20px; 
position:relative;
`;
const Search = styled.div`
width: 40%;
position: absolute;
left:0px;
right: 0px;
margin: auto;
display:flex;
align-item: center;
justify-content: space-between;
padding 5px;
border: 1px solid #ccc ;
border-radius: 3px;
`;
const Input = styled.input`
border:none;
background-color: transparent;
`;
const Button=styled.button`
padding: 5px 15px;
background-color: transparent;
border: 2px solid #3ea6ff;
color: #3ed6ff;
border-radius:3px;
font-weight:500 ;
//margin-top:10px;
cursor:pointer; 
display:flex;
align-item:centre;
gap:5px `;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Search>
                  <Input placeholder="Search"/>
                  <SearchIcon />
                </Search>
                <Link to="Signin" style={{textDecoration:"none"}}><Button><AccountCircleIcon/> SIGN IN</Button></Link>
            </Wrapper>
        </Container>
    )
}
export default Navbar