
import facade from "../util/apiFacade";

const ProtectedRoute = ({ element, requiredRole, loggedIn }) => {
  const userRoles = facade.getUserRoles();

  if (!loggedIn) {
    return (
      <div>
        <h2>Access Denied</h2>
        <p>Du skal være logget ind for at få adgang til denne side.</p>
      </div>
    );
  }

  if (requiredRole && !userRoles.includes(requiredRole)) {
    return (
      <div>
        <h2>Access Denied</h2>
        <p>Du har ikke rettigheder til denne side.</p>
      </div>
    );
  }

  return element;
};

export default ProtectedRoute;
