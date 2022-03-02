import Card from "../UI/Card";
import TodoAddButton from "./TodoAddButton";
import TodoContent from "./TodoContent";
import TodoDate from "./TodoDate";
import './Todo.module.css'

const dummyData = [
    { id: 1, data: "Buy new sweatshirt" },
    { id: 2, data: "Begin promotional phase" },
    { id: 3, data: "Read an article" },
    { id: 4, data: "Try not to fall asleep" },
    { id: 5, data: "Watch 'Sherlock'" },
    { id: 6, data: "Begin QA for the product" },
    { id: 7, data: "Go for a walk" },
    { id: 1, data: "Buy new sweatshirt" },
    { id: 2, data: "Begin promotional phase" },
    { id: 3, data: "Read an article" },
    { id: 4, data: "Try not to fall asleep" },
    { id: 5, data: "Watch 'Sherlock'" },
    { id: 6, data: "Begin QA for the product" },
    { id: 7, data: "Go for a walk" }
    
];

function Todo() {
    return (
        <Card>
            <TodoDate />
            <TodoContent data={dummyData}/>
            <TodoAddButton />    
        </Card>
    )
}

export default Todo;