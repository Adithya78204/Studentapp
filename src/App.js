import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import StudentDetails from './Components/StudentDetails';
import AddStudentForm from './Components/AddStudentForm';
import UpdateStudentForm from './Components/UpdateStudentForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleAddStudent = (student) => {
    setStudents([...students, { ...student, id: students.length + 1 }]);
  };

  const handleUpdateStudent = (updatedStudent) => {
    setStudents(students.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    ));
    setSelectedStudent(null);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/students" /> : <Login onLogin={handleLogin} />} />
        <Route path="/students" element={isLoggedIn ? (
          <StudentDetails
            students={students}
            onLogout={handleLogout}
            onEdit={setSelectedStudent}
            onDelete={handleDeleteStudent}
          />
        ) : (
          <Navigate to="/" />
        )} />
        <Route path="/add" element={isLoggedIn ? (
          <AddStudentForm onAdd={handleAddStudent} />
        ) : (
          <Navigate to="/" />
        )} />
        <Route path="/update" element={isLoggedIn && selectedStudent ? (
          <UpdateStudentForm student={selectedStudent} onUpdate={handleUpdateStudent} />
        ) : (
          <Navigate to="/students" />
        )} />
      </Routes>
    </Router>
  );
}

export default App;