// REACT
import React, {useState} from 'react';
import './TodoList.css';
import { addTodoItem } from '../store/todoStore.ts';

// LIBS

// COMPONENTS

interface ITodoListProps {
}

const defaultProps: ITodoListProps = {
};

const TodoList: React.FC<ITodoListProps> = (props) => {
  const [value, setValue] = useState('');

  const handleOnChangeTodoItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleOnClickTodoItem = () => {
    if (!value) return;
    addTodoItem(value);
    setValue('');
  };

  const handleAddTodoItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' || e.nativeEvent.isComposing) return;
    handleOnClickTodoItem();
  };

  return (
    <div className="todo-list">
      <input
        value={value}
        onChange={handleOnChangeTodoItem}
        onKeyDown={handleAddTodoItem}
        maxLength={20}
      />
      <button onClick={handleOnClickTodoItem}>+</button>
    </div>
  )
}

TodoList.defaultProps = defaultProps;

export default TodoList;
