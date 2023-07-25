import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";

import {
  BrowserRouter as Router,
  //Switch,
  Route,
  Routes,
  //Link
} from "react-router-dom";
//import { Home } from "@mui/icons-material";
import Video from "./pages/Video";
import Home from "./pages/Home";
import Signin from "./pages/Signin";

const Container = styled.div`
 display: flex;  

`;

const Main = styled.div`
flex: 7;
background-color:${({theme}) => theme.bg};
`;
const Wrapper = styled.div`
 padding:22px 110px;
`;

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Router>
        <Menu darkMode ={darkMode} setDarkMode={setDarkMode}/>
          <Main darkMode={darkMode} setDarkMode={setDarkMode}>
            <Navbar/>
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home/>} />
                  <Route path="Signin"element={<Signin/>} />
                  <Route path="vedio">
                    <Route path=":id" element={<Video/>}/>
                
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
          </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
