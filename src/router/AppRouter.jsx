import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../Navbar";
import { LoginPage, HomePage, DashboardPage } from "../pages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route index element={HomePage} />
        <Route path="login" element={<LoginPage />} />
        <Route path="dashborad" element={<DashboardPage />} />
      </Routes>
    </>
  );
};
