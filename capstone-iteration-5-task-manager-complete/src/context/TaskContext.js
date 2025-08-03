import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  collection, addDoc, deleteDoc, doc, onSnapshot,
  updateDoc, enableIndexedDbPersistence
} from 'firebase/firestore';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [lists, setLists] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    enableIndexedDbPersistence(db).catch(console.error);
    const unsub = onSnapshot(collection(db, 'lists'), snapshot => {
      const listData = snapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data()
      }));
      setLists(listData);
    });
    return () => unsub();
  }, []);

  const addList = async (name) => {
    await addDoc(collection(db, 'lists'), { name, items: [] });
  };

  const deleteList = async (id) => {
    await deleteDoc(doc(db, 'lists', id));
  };

  const addItem = async (listId, task, priority) => {
    const listRef = doc(db, 'lists', listId);
    const list = lists.find(l => l.id === listId);
    const items = [...list.items, { id: Date.now().toString(), task, priority, completed: false }];
    await updateDoc(listRef, { items });
  };

  const deleteItem = async (listId, itemId) => {
    const listRef = doc(db, 'lists', listId);
    const list = lists.find(l => l.id === listId);
    const items = list.items.filter(i => i.id !== itemId);
    await updateDoc(listRef, { items });
  };

  const toggleItem = async (listId, itemId) => {
    const listRef = doc(db, 'lists', listId);
    const list = lists.find(l => l.id === listId);
    const items = list.items.map(i => i.id === itemId ? { ...i, completed: !i.completed } : i);
    await updateDoc(listRef, { items });
  };

  const toggleCompleted = () => setShowCompleted(!showCompleted);

  return (
    <TaskContext.Provider value={{ lists, addList, deleteList, addItem, deleteItem, toggleItem, toggleCompleted, showCompleted }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);