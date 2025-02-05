import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "store/selectors/authSelectors";
import { searchApi } from "services/modules/searchApi";

export const searchApiInstance = searchApi();

export const SearchPage = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    window.location.href = "/login";
  }

  useEffect(() => {
    (() => {
      (async () => {
        try {
          const response = await searchApiInstance.search({});
          const data = await response.json();
          console.log("dogs", data);
        } catch (error) {
          console.error(error);
        }
      })();
    })();
  });

  return <></>;
};
