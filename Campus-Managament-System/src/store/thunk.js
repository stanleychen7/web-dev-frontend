import * as ac from './actions/actionCreators';
import axios from 'axios'

//All Campuses
export const fetchAllCampusesThunk = () => async (dispatch) => {
    try {
        let res = await axios.get(`/api/campuses`);
        dispatch(ac.fetchAllCampuses(res.data));
    } catch(err) {
        console.error(err);
    }
};

//Single Campus
export const fetchCampusThunk = (id) => async(dispatch) => {
    try{
        let res = await axios.get(`/api/campuses/${id}`);
        dispatch(ac.fetchCampus(res.data));
    } catch (err) {
        console.error(err);
    }
};

//All Students
export const fetchAllStudentsThunk = () => async(dispatch) => {
    try {
        let res = await axios.get(`/api/students`);
        dispatch(ac.fetchAllStudents(res.data));
    } catch (err) {
        console.error(err);
    }
};

//Add student
export const addStudentThunk = (student) => async (dispatch) => { 
  try {
    let res = await axios.post(`/api/students`, student);  
    dispatch(ac.addStudent(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

//Delete student
export const deleteStudentThunk = studentId => async dispatch => {
  try {
    await axios.delete(`/api/students/${studentId}`);  
    dispatch(ac.deleteStudent(studentId));
  } catch(err) {
    console.error(err);
  }
};

//Edit student
export const editStudentThunk = student => async dispatch => {
  try {
    let updatedStudent = await axios.put(`/api/students/${student.id}`, student); 
    dispatch(ac.editStudent(updatedStudent));
  } catch(err) {
    console.error(err);
  }
};

//Single student
export const fetchStudentThunk = id => async dispatch => { 
  try {
    let res = await axios.get(`/api/students/${id}`);  
    dispatch(ac.fetchStudent(res.data));
  } catch(err) {
    console.error(err);
  }
};