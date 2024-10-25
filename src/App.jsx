import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OnlineCourse from './pages/OnlineCourse';
import LandingPage1 from './pages/LandingPage1';
// Add more landing pages here

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing-page-1" element={<LandingPage1 />} />
        <Route path="/online-course" element={<OnlineCourse />} />
        {/* Add more routes for other landing pages */}
      </Routes>
    </div>
  );
}

export default App;
