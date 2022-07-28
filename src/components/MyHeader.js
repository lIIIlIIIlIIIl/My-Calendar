import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Header = styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
`
const LeftHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
`
const RightHeader = styled.div`
    width: 20%;
`
const Logo = styled.div`
    padding-left: 3rem;
    width: 20%;
`
const Serch = styled.form`
    display: flex;
    justify-content: space-around;
    width: 100%;
`
const Input = styled.input`
    width: 80%;
    height: 3rem;
    margin-right: 0.5rem;
    padding-left: 20px;
    font-size: 1.3em;
    border: none;
    border-radius: 50px;
    overflow: auto;
`
const InputBtn = styled.button`
    width: 3rem;
    height: 3rem;
`

const MyHeader = () =>{
    return (
        <Header>
            <LeftHeader>
                <Logo>
                    C-port
                </Logo>
                <Serch>
                    <Input type="text" placeholder="Search"></Input>
                    <FontAwesomeIcon icon={faSearch} size="lg" transform="left-140 down-10"/>
                </Serch>
            </LeftHeader>
            <RightHeader> </RightHeader>
        </Header>
    )
}

export default MyHeader;