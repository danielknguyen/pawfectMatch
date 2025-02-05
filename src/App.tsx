import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "pages/LoginPage";
import { SearchPage } from "pages/SearchPage";
import { Navbar } from "components/Navbar";
import { selectIsAuthenticated } from "store/selectors/authSelectors";
import { useSelector } from "react-redux";
import { authApi } from "services/modules/authApi";
import { searchApi } from "services/modules/searchApi";
import { useAppDispatch } from "store/hooks/useAppDispatch";
import { logout } from "store/actions/authActions";
import { handleAuthError } from "utils/handleAuthError";

const searchApiInstance = searchApi();
const authApiInstance = authApi();

export const App = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const dispatch = useAppDispatch();

  const handleLoggingOut = async () => {
    // TODO: handle if logout fails
    await authApiInstance.logout();

    dispatch(logout());

    window.location.href = "/login";
  };

  /**
   * useEffect hook to check authentication status and handle potential errors.
   * If the user is authenticated, it performs a search request to verify session validity.
   * If the request fails, it handles the authentication error by logging the user out.
   */
  useEffect(() => {
    if (isAuthenticated) {
      (async function checkAuth() {
        try {
          const response = await searchApiInstance.search({});

          if (!response.ok) {
            const error = await response.json();
            handleAuthError(error, handleLoggingOut);
          }
        } catch (error) {
          handleAuthError(error, handleLoggingOut);
        }
      })();
    }
  }, [isAuthenticated]);

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
