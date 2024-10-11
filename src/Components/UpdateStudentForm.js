import React, { useEffect, useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UpdateStudentForm = ({ student, onUpdate }) => {
  const [updatedStudent, setUpdatedStudent] = useState({
    name: '',
    age: '',
    gender: '',
    class: '',
    mark1: '',
    mark2: '',
    mark3: '',
    total:''
  });

  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    if (student) {
      setUpdatedStudent(student);
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStudent({ ...updatedStudent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedStudent);
    navigate('/students'); // Redirect to student list after updating
  };

  const handleCancel = () => {
    navigate('/students'); // Redirect to student list on cancel
  };

  if (!student) {
    return <div>No student selected for update.</div>;
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto', padding: 2 }}>
      <TextField
        name="name"
        label="Name"
        value={updatedStudent.name}
        onChange={handleChange}
        required
      />
      <TextField
        name="age"
        label="Age"
        value={updatedStudent.age}
        onChange={handleChange}
        required
      />
      <TextField
        name="gender"
        label="Gender"
        value={updatedStudent.gender}
        onChange={handleChange}
        required
      />
      <TextField
        name="class"
        label="Class"
        value={updatedStudent.class}
        onChange={handleChange}
        required
      />
      <TextField
        name="mark1"
        label="Mark 1"
        value={updatedStudent.mark1}
        onChange={handleChange}
        required
      />
      <TextField
        name="mark2"
        label="Mark 2"
        value={updatedStudent.mark2}
        onChange={handleChange}
        required
      />
      <TextField
        name="mark3"
        label="Mark 3"
        value={updatedStudent.mark3}
        onChange={handleChange}
        required
      />
      <TextField
        name="total"
        label="Total"
        value={updatedStudent.total}
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

export default UpdateStudentForm;