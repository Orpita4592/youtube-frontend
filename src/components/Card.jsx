import React from 'react';
import styled from 'styled-components';
import pic from "../img/im.png";
import channelimg from "../img/channel_img.jpeg"
import { Link } from 'react-router-dom';

const Container =styled.div`
width:${(props) =>props.type !== "sm" && "260px"};
margin-bottom:  ${(props) => props.type === "sm" ? "10px":"45px"};
cursor: pointer; 
display: ${(props) => props.type === "sm" && "flex"};
gap:10px;
`;

const Image =styled.img`
width:100%;
height: ${(props) => props.type === "sm" ? "120px":"220px"};
background-color: #999;
flex:1;
`;

const Details = styled.div`
display:flex;
margin-top:${(props) =>props.type !== "sm" && "16px"} ;
gap:12px;
flex:1;
`;
const ChannelImg = styled.img`
width:36px;
height:36px;
border-radius:50%;
background-color:#999;
display:${(props) =>props.type === "sm" && "none"};
`;
const Text =styled.div`
display:${(props) => props.type === "sm" & "flex"};
width:150px`;

const Title =styled.h1`
font-size:16px;
font-weight:500;
color:${({theme}) => theme.text};

`;

const ChannelName=styled.h2`
font-size: 14px;
color:${({theme})=> theme.textSoft};
margin:9px 0px;
`;
const Info =styled.div`
display:${(props) => props.type === "sm" & "flex"};
color:${({ theme }) => theme.textSoft};
font-size: 13px;
`;


const Card = ({type}) => {
  return (
    <Link to="/vedio/test" style={{textDecoration:"none"}}>
      <Container type={type}>
        <Image type={type} src={pic}/>
        
          <Details type={type}>
            <ChannelImg type={type} src={channelimg}/>
            <Text>
              <Title>Test Video</Title>
              <ChannelName>Lama Dev</ChannelName>
              <Info>660,000 veiws. 1 day ago </Info>
            </Text>
          </Details>
        </Container>
        </Link>
    
  )
};

export default Card;