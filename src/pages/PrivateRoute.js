import { Route } from 'react-router-dom';
import { auth } from '../helpers/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = auth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Component {...props} />
      )}
    />
  );
};

export default PrivateRoute;
