import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "pages/LoginPage";
import { HomePage } from "pages/HomePage";
import { Navbar } from "components/Navbar";

export const App = () => {
  return (
    <>
      <Navbar title="PawfectMatch" isLoggedIn={true} />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
};
