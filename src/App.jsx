import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Dashboard, Analytics, Admin } from "./pages";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

export function App() {
  return (
    <BrowserRouter>
    
      <Navigation />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Landing</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}
