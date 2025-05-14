import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  HomePageContainer,
  AllCampusesContainer,
  StudentContainer,
  AllStudentsContainer,
  CampusContainer,
} from './components/containers';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/campuses" element={<AllCampusesContainer />} />
        <Route path="/student/:studentId" element={<StudentContainer/>} />
        <Route path="/campus/:campusId" element={<CampusContainer/>} />
        <Route path='/students' element={<AllStudentsContainer/>} />
      </Routes>        
    </div>
  );
}

export default App;