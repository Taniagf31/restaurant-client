import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Home, Dashboard, Analytics, Admin } from "./pages";

export function App() {
  return (
    <BrowserRouter>

      {/* <Navigation /> */}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
// function Navigation() {
//   return (
    // <nav>
      {/* <ul> */}
        {/* <li> */}
          {/* <Link to="/landing">Landing</Link> */}
        {/* </li> */}
        {/* <li> */}
          {/* <Link to="/home">Home</Link> */}
        {/* </li> */}
        {/* <li> */}
          {/* <Link to="/dashboard">Dashboard</Link> */}
        {/* </li> */}
        {/* <li> */}
          {/* <Link to="/analytics">Analytics</Link> */}
        {/* </li> */}
        {/* <li> */}
          {/* <Link to="/admin">Admin</Link> */}
        {/* </li> */}
      {/* </ul> */}
    {/* </nav> */}
//   );
// }
// 