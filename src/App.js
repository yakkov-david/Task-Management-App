import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const handleAddTask = () => {
    if (task !== '') {
      const newTasks = [...tasks, task];
      setTasks(newTasks);
      setTask('');

      // Save to localStorage
      localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);

    // Save to localStorage
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  return (
    <Container>
      <h1>Task Management App</h1>
      <div>
        <TextField 
          variant="outlined" 
          label="New Task" 
          value={task} 
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleAddTask();
            }
          }}
        />
        <Button variant="contained" color="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </div>
      <List>
        {tasks.map((t, index) => (
          <ListItem key={index}>
            <ListItemText primary={t} />
            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
