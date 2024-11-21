import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Measurements from './pages/Measurements';
import Orders from './pages/Orders';
import Settings from './pages/Settings';
import Payments from './pages/Payments';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/measurements" element={<Measurements />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Payments" element={<Payments />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
