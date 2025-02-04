import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "pages/LoginPage";
import { HomePage } from "pages/HomePage";
import { Navbar } from "components/Navbar";
import { selectIsAuthenticated } from "store/selectors/authSelectors";
import { useSelector } from "react-redux";

export const App = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)

  return (
    <>
      <Navbar title="PawfectMatch" isLoggedIn={isAuthenticated} />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
};
