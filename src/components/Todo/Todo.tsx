import Card from '../../UI/Card';
import TodoAddButton from '../TodoAddButton/TodoAddButton';
import TodoContent from '../TodoContent/TodoContent';
import TodoDate from '../TodoDate/TodoDate';
import './Todo.module.css';

const dummyData = [
  { id: 1, task: 'Buy new sweatshirt' },
  { id: 2, task: 'Begin promotional phase' },
  { id: 3, task: 'Read an article' },
  { id: 4, task: 'Try not to fall asleep' },
  { id: 5, task: "Watch 'Sherlock'" },
  { id: 6, task: 'Begin QA for the product' },
  { id: 7, task: 'Go for a walk' },
];

function Todo() {
  return (
    <Card>
      <TodoDate />
      <TodoContent values={dummyData} />
      <TodoAddButton />
    </Card>
  );
}

export default Todo;
