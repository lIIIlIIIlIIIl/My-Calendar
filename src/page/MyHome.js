import styled from "styled-components";

const Home = styled.div`
    background-color: white;
    margin-bottom: 28px;
    width: 80%;
    border-radius: 2rem;
    padding: 3rem;
`

const Calendar = styled.div`
    .calendar_container{
        display: flex;
    }
    .today{}
    .today>:first-child{
        font-size: 2rem;
    }
`

const Weather = styled.div``

const Today = styled.div``

const MyHome = () =>{
    return (
        <Home>
            <Calendar>
                <h1>Calendar</h1>
                <div className="calendar_container">
                    <div className="today">
                        <p>123</p>
                        <p>Today</p>
                    </div>
                    <div className="week">
                        <p>123</p>
                        <p>Week</p>
                    </div>
                    <div className="month">
                        <p>123</p>
                        <p>Month</p>
                    </div>
                </div>
            </Calendar>
            <Weather>
                <h1>Weather</h1>
            </Weather>
            <Today>
                <h1>Important</h1>
            </Today>
        </Home>
    )
}

export default MyHome;