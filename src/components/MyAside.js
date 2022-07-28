import { useCallback, useState } from "react";
import styled from "styled-components";

const Aside = styled.div`
    margin-bottom : 28px;
    margin-left: 32px;
    margin-right : 25px;
    background-color: white;
    width: 20%;
    border-radius: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;

    .checkInput{
        color: red;
        padding-left: 15px;
    }
    .inputToggle{
        display: none;
    }
`

const TodoForm = styled.form`
    height: 7%;
    display: flex;
    align-items: center;
    >input{
        width: 80%;
        height: 2.5rem;
        margin-right: 15px;
        border-radius: 15px;
        border: none;
        background-color: #ecf0f1;
        padding-left: 15px;
        font-size: 1.5rem;
    }
    >button{
        width: 10%;
        height: 2rem;
    }

`

const TodoList = styled.ul`
    height: 80%;
    overflow-x: hidden; 
    >li{
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 1.5rem;
        >button{
            margin-left: 1rem;
            height: 1rem;
        }
        >p{
            font-size: 1.3rem;
            word-break: break-all;
        }
    }
`

const MyAside = () =>{

    const [todoValue, setTodoValue] = useState('');
    const [todoList, setTodoList] = useState([]);


    const inputValue = (e) => {
        setTodoValue(e);
    };

    const buttonClick = (e) =>{
        e.preventDefault();
        const inputCheck = e.target.parentElement.parentElement.children[2];
        const newTodo = {
            id: Math.floor(Math.random() * 10) + 1,
            todo: todoValue
        }

        if(todoValue.length !== 0){
            inputCheck.className = "inputToggle";
            setTodoList([newTodo, ...todoList]);
            setTodoValue('');
            return;
        }
        inputCheck.className = "checkInput"
    }

    const inputDelete = (e) => {
        const target = e.target.parentElement;
        setTodoList(todoList.filter((el)=>{
            return !(el === target.firstElementChild.innerText); // 동일하게 작성된 것도 함께 지워진다. id값을 줘서 지우도록 하자
          }))
        }
    

        // li의 key값을 랜덤하게 주는 방법 찾아서 넣어주기
    return (
       <Aside>
        <h1>To-Do</h1>
        <TodoForm>
            <input type="text" placeholder="할일을 추가해주세요!" onChange={(e)=>inputValue(e.target.value)} value={todoValue}></input>
            <button onClick={buttonClick}></button>
        </TodoForm>
        <div className="checkInput inputToggle">
            <span>한글자 이상 입력해주세요!</span>
        </div>
        <TodoList>
            {todoList.map((el) => {
                return (
                    <li key={el.id}>
                        <p>{el.todo}</p>
                        <button onClick={inputDelete}></button>
                    </li>
                )
            })}
        </TodoList>
       </Aside>
    )
}

export default MyAside;