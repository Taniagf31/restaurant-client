import { Route, Routes } from "react-router-dom";
import { PrincipalPage } from "../PrincipalPage";

export const PrincipalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrincipalPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
