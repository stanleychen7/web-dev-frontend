import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  HomePageContainer,
  AllCampusesContainer,
  StudentContainer,
  AllStudentsContainer,
  CampusContainer,
  NewStudentContainerWrapper,
  NewCampusContainerWrapper
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
        <Route path='/newStudent' element={<NewStudentContainerWrapper/>} />
        <Route path='/newCampus' element={<NewCampusContainerWrapper/>} />
      </Routes>        
    </div>
  );
}

export default App;