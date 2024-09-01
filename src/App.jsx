import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';
import CamperDetails from './pages/CamperDetails/CamperDetails.jsx';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/catalog" element={<CatalogPage />} />
    <Route path="/catalog/:id" element={<CamperDetails />} />
            </Routes>
        </Router>
    );
};

export default App;