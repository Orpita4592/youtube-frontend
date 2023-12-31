import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:20px 0px;
height:calc(100vh-56px);
color:${({theme}) => theme.text};
${'' /* padding:90px 0px; */}
`;
const Wrapper = styled.div`
display:flex;
align-items:center;
flex-direction:column;
background-color:${({theme}) => theme.bgLighter};
border: 1px solid ${({theme}) => theme.soft};
padding:20px 50px;
gap:10px;
width:250px

`;
const Title = styled.h1`
font-size:24px;
`;

const SubTitle = styled.h2`
font-size:20px;
font-weight:300;
`;

const Input = styled.input`
border:2px solid ${({theme}) => theme.soft};
border-radius:3px;
padding:10px;
background-color:transparent;
width:100%;
`;

const Buttons = styled.button`
border-radius:3px;
border:none;
padding: 10px 20px;
font-weight:500;
cursor:pointer;
background-color:${({theme}) => theme.soft};
color:${({theme}) => theme.textSoft};

`;

const More = styled.div`
display:flex;
margin-top:10px;
font-size:12px;
color:${({theme}) => theme.textSoft};
`;

const Links = styled.div`
margin-left: 50px;`;

const Link = styled.span`
margin-left:30px;`;






export const Signin = () => {
  return (
    <Container>
    <Wrapper>
      <Title>  Sign In</Title>
      <SubTitle>to continue to YouTube</SubTitle>
      <Input placeholder="username"></Input>
      <Input type="password" placeholder="password"></Input>
      <Buttons>Sign in</Buttons>
      <Title>or</Title>
      <Input placeholder="username"></Input>
      <Input placeholder="email"></Input>
      <Input type="password" placeholder="password"></Input>
      <Buttons>Sign up</Buttons>
  </Wrapper>
      <More>
        English(USA)
        <Links>
            <Link>Help</Link>
            <Link>Privacy</Link>
            <Link>Terms</Link>

        </Links>
      </More>
    </Container>
  )
}
export default Signin
