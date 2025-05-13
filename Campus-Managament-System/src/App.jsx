import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  HomePageContainer,
  AllCampusesContainer,
} from './components/containers';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/campuses" element={<AllCampusesContainer />} />
      </Routes>        
    </div>
  );
}

export default App;