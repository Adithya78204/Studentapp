import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddStudentForm = ({ onAdd }) => {
  const [student, setStudent] = useState({
    name: '',
    age: '',
    gender: '',
    className: '',
    mark1: '',
    mark2: '',
    mark3: ''
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(student);
    // Clear form
    setStudent({
      name: '',
      age: '',
      gender: '',
      class: '',
      mark1: '',
      mark2: '',
      mark3: '',
      total: ''
    });
    navigate('/students'); // Redirect to student list after adding
  };

  const handleCancel = () => {
    navigate('/students'); // Redirect to student list on cancel
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto', padding: 2 }}>
      <TextField
        name="name"
        label="Name"
        value={student.name}
        onChange={handleChange}
        required
      />
      <TextField
        name="age"
        label="Age"
        value={student.age}
        onChange={handleChange}
        required
      />
      <TextField
        name="gender"
        label="Gender"
        value={student.gender}
        onChange={handleChange}
        required
      />
      <TextField
        name="class"
        label="Class"
        value={student.class}
        onChange={handleChange}
        required
      />
      <TextField
        name="mark1"
        label="Mark 1"
        value={student.mark1}
        onChange={handleChange}
        required
      />
      <TextField
        name="mark2"
        label="Mark 2"
        value={student.mark2}
        onChange={handleChange}
        required
      />
      <TextField
        name="mark3"
        label="Mark 3"
        value={student.mark3}
        onChange={handleChange}
        required
      />
      <TextField
        name="total"
        label="Total"
        value={student.total}
        onChange={handleChange}
        required
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button type="submit" variant="contained" color="primary">Save</Button>
        <Button onClick={handleCancel} variant="outlined" color="secondary">Cancel</Button>
      </Box>
    </Box>
  );
};

export default AddStudentForm;