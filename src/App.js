
import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
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


