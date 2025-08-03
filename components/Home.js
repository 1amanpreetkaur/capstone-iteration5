import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { Link } from 'react-router-dom';

export default function Home() {
  const { lists, addList, deleteList } = useTasks();
  const [listName, setListName] = useState('');

  return (
    <div>
      <h2>Your Task Lists</h2>
      <form onSubmit={(e) => { e.preventDefault(); addList(listName); setListName(''); }}>
        <input value={listName} onChange={(e) => setListName(e.target.value)} placeholder="New List Name" />
        <button type="submit">Add List</button>
      </form>
      <ul>
        {lists.map(list => (
          <li key={list.id}>
            <Link to={`/list/${list.id}`}>{list.name}</Link>
            <button onClick={() => deleteList(list.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}