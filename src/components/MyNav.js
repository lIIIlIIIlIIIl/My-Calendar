import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCalendarDays, faFilePen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Nav = styled.div`
    padding-top: 5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 5%;
`
const IconBtn = styled.button`
    border-radius: 50%;
    margin-bottom: 5rem;
    border: none;
    padding:10px;
    background-color: #70a1ff;
    &:hover{
        background-color: white;
    }
`

const MyNav = () =>{
    return (
        <Nav>
            <Link to="/">
                <IconBtn>
                    <FontAwesomeIcon icon={faHouse} size="2x" />
                </IconBtn>
            </Link>

            <Link to="/calendarlist">
                <IconBtn>
                  <FontAwesomeIcon icon={faFilePen} size="2x" />
                </IconBtn>
            </Link>

            <Link to="/calendar">
                <IconBtn>
                    <FontAwesomeIcon icon={faCalendarDays} size="2x"/>
                </IconBtn>
            </Link>
        </Nav>
    )
}

export default MyNav;