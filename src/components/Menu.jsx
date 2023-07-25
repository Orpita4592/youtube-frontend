import { Home } from "@mui/icons-material";
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import React from "react";
import styled from "styled-components";
import PompiTube from "../img/youtube.png"
import { Link } from "react-router-dom";

const Container = styled.div`
flex:1;
background-color: ${({theme}) =>theme.bg};
height: 170vh;
color: ${({theme}) =>theme.text};
font-size:12px;
position: sticky;
top: 0;
`;

const Wrapper = styled.div`
padding: 10px 26px;
`;
const Logo = styled.div`
display: flex;
align-item: centre;
gap:5px;
font-weight:bold;
margin-botom: 25px;
padding:10px 0px
`;

const Img=styled.img`
height : 25px;

`;

const Item=styled.div`
display:flex;
align-item: centre;
gap:20px;
cursor:pointer;
padding:4.5px 0px;

&:hover {
    background-color:${({theme}) => theme.soft}
}
`;

const Hr=styled.hr`
margin: 15px 0px;
border:0.5px solid ${({theme}) =>theme.soft};
`;

const Login=styled.div``;
const Button=styled.button`
padding: 5px 15px;
background-color: transparent;
border: 2px solid #3ea6ff;
color: #3ed6ff;
border-radius:3px;
font-weight:500 ;
margin-top:10px;
cursor:pointer; 
display:flex;
align-item:centre;
gap:5px `;

const Title = styled.h2`
font-size:14px;
font-weoght: 500;
color:#aaaaaa;
margin-bottom:20px;
`;

const Menu = ({darkMode, setDarkMode}) => {
    return (
        <Container>
            <Wrapper>
            <Link to="/" style={{textDecoration:"none",color:"inherit"}}>

                <Logo>
                     <Img src={PompiTube}/>
                      YouTube
                </Logo>
                </Link>
                <Item>
                    <Home></Home>
                    Home
                </Item>
                <Item>
                    <ExploreIcon/>
                    Explore
                </Item>
                <Item>
                    <SubscriptionsIcon/>
                    Subscription
                </Item>
                <Hr/>
                <Item>
                    <VideoLibraryIcon/>
                    Library
                </Item>
                <Item>
                    <HistoryIcon/>
                    History
                </Item>
                <Hr/>
                <Login>
                    Sign in to like vedios, comment, and subscribe.
                    <Link to="Signin" style={{textDecoration:"none"}}>
                    <Button>
                    <AccountCircleIcon/> SIGN IN
                    </Button>
                    </Link>
                    
                </Login>
                <Hr/>
                <Title>BEST OF POMPITUBE</Title>
                <Item>
                    <LibraryMusicIcon/>
                    Music
                </Item>
                <Item>
                    <SportsBasketballIcon/>
                    Sports
                </Item>
                <Item>
                    <SportsEsportsIcon/>
                   Gaming
                </Item>
                <Item>
                    <MovieFilterIcon/>
                    Movies
                </Item>
                <Item>
                    <NewspaperIcon/>
                    News
                </Item>
                <Item>
                    <LiveTvIcon/>
                    Live
                </Item>
                <Hr/>
                <Item>
                    <SettingsIcon/>
                    Settings
                </Item>
                <Item>
                    <FlagIcon/>
                    Report
                </Item>
                <Item>
                    <HelpOutlineIcon/>
                    Help
                </Item>
                <Item onClick={()=>setDarkMode(!darkMode)}>
                     <SettingsBrightnessIcon/>
                    {darkMode ? "Light":"Dark"}Mode  
                </Item>
                
            </Wrapper>
        </Container>
    );
};
export default Menu;