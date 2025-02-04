import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "pages/LoginPage";
import { HomePage } from "pages/HomePage";
import { Navbar } from "components/Navbar";
import { selectIsAuthenticated } from "store/selectors/authSelectors";
import { useSelector } from "react-redux";
import { authApi } from "services/modules/authApi";
import { useAppDispatch } from "store/hooks/useAppDispatch";
import { logout } from "store/actions/authActions";

const authApiInstance = authApi();

export const App = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)

  const dispatch = useAppDispatch();

  const handleLoggingOut = async() => {
    // TODO: handle if logout fails
    await authApiInstance.logout();

    dispatch(logout());

    window.location.href = "/login";
  }

  return (
    <>
      <Navbar title="PawfectMatch" isLoggedIn={isAuthenticated} logout={handleLoggingOut} />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
};
