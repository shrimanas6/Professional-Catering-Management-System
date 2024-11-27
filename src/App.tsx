import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (credentials: { username: string; password: string }) => {
    // TODO: Implement actual authentication
    console.log('Login attempted with:', credentials);
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {!isAuthenticated ? <Login onLogin={handleLogin} /> : <Dashboard />}
      </div>
    </BrowserRouter>
  );
}

export default App;
