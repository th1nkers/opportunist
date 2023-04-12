import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, useNavigate } from 'react-router-dom';
import { auth } from '../helpers/firebaseConfig';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : navigate("login")
      }
    />
  );
};

export default PrivateRoute;
