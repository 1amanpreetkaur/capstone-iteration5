import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

export default function ListView() {
  const { id } = useParams();
  const { lists, addItem, deleteItem, toggleItem, toggleCompleted, showCompleted } = useTasks();
  const list = lists.find(l => l.id === id);
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('');

  if (!list) return <div>List not found</div>;

  return (
    <div>
      <h2>{list.name}</h2>
      <form onSubmit={(e) => { e.preventDefault(); addItem(id, task, priority); setTask(''); setPriority(''); }}>
        <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Task" />
        <input value={priority} onChange={(e) => setPriority(e.target.value)} placeholder="Priority" />
        <button type="submit">Add Item</button>
      </form>
      <button onClick={() => toggleCompleted()}>{showCompleted ? 'Hide' : 'Show'} Completed</button>
      <ul>
        {list.items
          .filter(item => showCompleted || !item.completed)
          .sort((a, b) => a.priority.localeCompare(b.priority))
          .map(item => (
          <li key={item.id}>
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.task}</span>
            <button onClick={() => toggleItem(id, item.id)}>Toggle</button>
            <button onClick={() => deleteItem(id, item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}