 
import { Navigate,Outlet } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
  if (isLoggedIn=="false") {
    return <Navigate to="/login" replace />;
  }
  return children?children:<Outlet/>;
};
export default Protected;