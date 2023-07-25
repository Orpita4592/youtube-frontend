import React from 'react'
import styled from 'styled-components'
import channelimg from "../img/channel_img.jpeg"
import { Comment } from './Comment';

const Container = styled.div``;

const NewComment = styled.div`
display:flex;
align-item:center;
gap:10px`;

const Avatar = styled.img`
width:50px;
height:50px;
border-radius:50%;`;

const Input = styled.input`
border:none;
background-color:transparent;
border-bottom:1px solid ${({theme}) => theme.textSoft};
padding:5px;
outline:none;
height: 30px;
width:100%
`;

export const Comments = () => {
  return (
    <Container>
        <NewComment>
         <Avatar src={channelimg}></Avatar> 
         <Input placeholder='Add a comment..'></Input>  
        </NewComment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>

    </Container>
  )
}
