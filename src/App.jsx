import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchTickets from "./components/pages/SearchTickets.jsx";
import RoutesPage from "./components/pages/RoutesPage";
import RentTransport from "./components/pages/RentTransport";
import Taxi from "./components/pages/Taxi";
import About from "./components/pages/About";
import Clients from "./components/pages/Clients";
import Navbar from './components/Navbar';
import ProfilePage from './components/pages/ProfilePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchTickets />} />
        <Route path="/search-tickets" element={<SearchTickets />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/rent-transport" element={<RentTransport />} />
        <Route path="/taxi" element={<Taxi />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </Router>

    
  );
}

export default App;
