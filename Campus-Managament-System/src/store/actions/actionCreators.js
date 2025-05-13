import * as at from './actionTypes';

// Fetch all campuses
export const fetchAllCampuses = (campuses) => ({
  type: at.FETCH_ALL_CAMPUSES,
  payload: campuses,
});

// Fetch a single campus
export const fetchCampus = (campus) => ({
  type: at.FETCH_CAMPUS,
  payload: campus,
});

// Fetch all students
export const fetchAllStudents = (students) => ({
  type: at.FETCH_ALL_STUDENTS,
  payload: students,
});

// Add a student
export const addStudent = (student) => ({
  type: at.ADD_STUDENT,
  payload: student,
});

// Delete a student
export const deleteStudent = (studentId) => ({
  type: at.DELETE_STUDENT,
  payload: studentId,
});

// Edit a student
export const editStudent = (student) => ({
  type: at.EDIT_STUDENT,
  payload: student,
});

// Fetch a single student
export const fetchStudent = (student) => ({
  type: at.FETCH_STUDENT,
  payload: student,
});