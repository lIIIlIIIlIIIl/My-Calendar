import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './App.css';
import styled from "styled-components";

import MyHeader from './components/MyHeader';
import MyHome from './page/MyHome';
import MyNav from "./components/MyNav";
import MyAside from "./components/MyAside";
import MyCalendar from "./page/MyCalendar";
import MyCalendarList from "./page/MyCalendarList";

const Container = styled.div`
  display: flex;
  height: 90vh;
`



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader/>
        <Container>
          <MyNav />
          <Routes>         
            <Route path='/' element={<MyHome />}></Route>
            <Route path="/calendarlist" element={<MyCalendarList/>}></Route>
            <Route path="/calendar" element={<MyCalendar/>}></Route>
          </Routes>
          <MyAside/>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
