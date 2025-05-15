import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  HomePageContainer,
  AllCampusesContainer,
  StudentContainer,
  AllStudentsContainer,
  CampusContainer,
  NewStudentContainer,
  NewCampusContainer,
  EditCampus,
  EditStudent
} from './components/containers';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/campuses" element={<AllCampusesContainer />} />
        <Route path="/students/:studentId" element={<StudentContainer/>} />
        <Route path="/campuses/:campusId" element={<CampusContainer/>} />
        <Route path='/students' element={<AllStudentsContainer/>} />
        <Route path='/newStudent' element={<NewStudentContainer/>} />
        <Route path='/newCampus' element={<NewCampusContainer/>} />
        <Route path='/campuses/:campusId/edit' element={<EditCampus/>} />
        <Route path='/students/:studentId/edit' element={<EditStudent/>} />
      </Routes>        
    </div>
  );
}

export default App;