import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OnlineCourse from './pages/OnlineCourse';
import Header from './components/Header';
import SaasProduct from './pages/SaasProduct';
// Add more landing pages here

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saas-product" element={<SaasProduct />} />
        <Route path="/online-course" element={<OnlineCourse />} />
        {/* Add more routes for other landing pages */}
      </Routes>
    </div>
  );
}

export default App;
