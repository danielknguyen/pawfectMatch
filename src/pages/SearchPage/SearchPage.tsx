import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "store/selectors/authSelectors";

export const SearchPage = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)

  if (!isAuthenticated) {
    window.location.href = "/login";
  }

  return <></>;
};
