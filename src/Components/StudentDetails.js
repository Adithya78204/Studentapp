import React from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function StudentDetails({ students, onLogout, onEdit, onDelete }) {
  return (
    <Container maxWidth="md">
      <h2>Student List</h2>
      <Button variant="contained" color="secondary" onClick={onLogout}>
        Logout
      </Button>
      <Button variant="contained" color="primary" component={Link} to="/add" style={{ marginLeft: '10px' }}>
        Add Student
      </Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>Mark 1</TableCell>
            <TableCell>Mark 2</TableCell>
            <TableCell>Mark 3</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.age}</TableCell>
              <TableCell>{student.gender}</TableCell>
              <TableCell>{student.class}</TableCell>
              <TableCell>{student.mark1}</TableCell>
              <TableCell>{student.mark2}</TableCell>
              <TableCell>{student.mark3}</TableCell>
              <TableCell>{student.total}</TableCell>
              <TableCell>
                <Box display="flex" justifyContent="space-between">
                  <Button variant="contained" color="primary" component={Link} to="/update" onClick={() => onEdit(student)}>
                    Update
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => onDelete(student.id)} style={{ marginLeft: '10px' }}>
                    Delete
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default StudentDetails;