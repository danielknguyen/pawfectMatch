import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "pages/LoginPage";
import { SearchPage } from "pages/SearchPage";
import { Navbar } from "components/Navbar";
import { selectIsAuthenticated } from "store/selectors/authSelectors";
import { useSelector } from "react-redux";
import { authApi } from "services/modules/authApi";
import { useAppDispatch } from "store/hooks/useAppDispatch";
import { logout } from "store/actions/authActions";
import { handleAuthError } from "utils/handleAuthError";
import { selectDogsError } from "store/selectors/dogSelectors";

const authApiInstance = authApi();

export const App = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const error = useSelector(selectDogsError);

  const dispatch = useAppDispatch();

  const handleLoggingOut = async () => {
    await authApiInstance.logout();

    dispatch(logout());

    window.location.href = "/login";
  };

  useEffect(() => {
    handleAuthError(error, handleLoggingOut);
  }, [error]);

  return (
    <>
      <Navbar
        title="PawfectMatch"
        isLoggedIn={isAuthenticated}
        logout={handleLoggingOut}
      />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SearchPage />} />
        </Routes>
      </Router>
    </>
  );
};
