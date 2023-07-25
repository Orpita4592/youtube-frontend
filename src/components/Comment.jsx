import React from 'react'
import styled from 'styled-components'
import channelimg from "../img/channel_img.jpeg"


const Container = styled.div`
display:flex;
gap: 10px;
margin: 30px 0px;
`;

const Avatar = styled.img`
width:50px;
height:50px;
border-radius:50%;`;

const Detail = styled.div`
display:flex;
flex-direction: column;
gap: 10px;
color:${({theme}) => theme.text};
`;

const Name = styled.span`
font-size:13px;
font-weight: 500`;

const Date = styled.span`
font-size:12px;
font-weight:400;
color:${({theme}) => theme.textSoft};
margin-left:5px;
`;

const Text = styled.span`font-size:14px`;



export const Comment = () => {
  return (
    <Container>
        <Avatar src={channelimg}/>
        <Detail>
            <Name>POmpi <Date>1 day ago</Date></Name>
            <Text>It was really helpful vedio keep it up...</Text>
        </Detail>
    </Container>
  )
}

