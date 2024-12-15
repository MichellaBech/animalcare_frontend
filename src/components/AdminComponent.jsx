import { useEffect, useState } from "react";
import facade from "../util/apiFacade";

function AdminComponent() {
  const [userRoles, setUserRoles] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (facade.loggedIn()) {
      setLoggedIn(true);
      setUserRoles(facade.getUserRoles());
    }
  }, []);

  const hasAdminAccess = loggedIn && userRoles.includes("ADMIN");

  return (
    <div>
      {hasAdminAccess ? (
        <p>Welcome to the Admin Page. You have the necessary permissions.</p>
      ) : loggedIn ? (
        <p>You do not have the required permissions to view this page.</p>
      ) : (
        <p>You must log in to view this page.</p>
      )}
    </div>
  );
}

export default AdminComponent;
