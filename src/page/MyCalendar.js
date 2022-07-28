import { useRef, useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";


const CalendarBox = styled.div`
    background-color: white;
    margin-bottom: 28px;
    width: 80%;
    border-radius: 2rem;
    padding: 3rem;


    .react-calendar{
        line-height: 2rem;
        width: 60%;
        height: auto;
    }

    .react-calendar__navigation{
        display: flex;
        
        >button{
            border: none;
            font-size: 3rem;
            background-color: white;
        }
    }

    .react-calendar__viewContainer{
        margin-top: 2rem;

        .react-calendar__month-view__weekdays{
            text-align: center;
            font-size: 1rem;

            >div{
                font-weight: 900;
                border-top: 1px solid #a4b0be;
                border-bottom: 1px solid #a4b0be;
                >abbr{
                    text-decoration: none;
                }
            }

            >:first-child{
                color: red;
            }
        }

        .react-calendar__month-view__days{
            >button{
                padding-bottom: 2rem;
                background-color: white;
                height: 6rem;
                font-size: 1rem;
                border-bottom: 1px solid #a4b0be;
                border-top: none;
                border-left: none;
                border-right: none;
            }
            >button:hover{
                background-color: #ecf0f1;
            }
        }
        .react-calendar__year-view{
                >div{
                 >button{
                    background-color: white;
                    height: 8rem;
                    border-bottom: 1px solid #a4b0be;
                    border-top: none;
                    border-left: none;
                    border-right: none;
                    >abbr{
                        font-size: 2rem;
                    }
                }
                 >button:hover{
                     background-color: #ecf0f1;
                }
            }
        }
        .react-calendar__decade-view{
            >div{
                >button{
                    background-color: white;
                    height: 8rem;
                    font-size: 2rem;
                    border-bottom: 1px solid #a4b0be;
                    border-top: none;
                    border-left: none;
                    border-right: none;
                }
                >button:hover{
                    background-color: #ecf0f1;
                }
            }
        }

    .react-calendar__century-view{
        >div{
            >button{
                    background-color: white;
                    height: 8rem;
                    font-size: 2rem;
                    border-bottom: 1px solid #a4b0be;
                    border-top: none;
                    border-left: none;
                    border-right: none;
                }
                >button:hover{
                    background-color: #ecf0f1;
                }
            }
        }
    }


`

const MyCalendar = () =>{
    const [date, setDate] = useState(new Date());
    const day = useRef(null);

    const dayHandler = (e) => {
        console.log(e)
    }
    console.dir(date)

    return (
        <CalendarBox>
            <Calendar
            className="react-calendar"
                onChange={setDate}
                value={date}
                locale="en"
                onClickDay={dayHandler}
                calendarType="US"
                selectRange={true}
                minDetail='year'
            />
     {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}

        </CalendarBox>
    )
}

export default MyCalendar;