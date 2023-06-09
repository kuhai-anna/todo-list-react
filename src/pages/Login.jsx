import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
        <LoginForm />
      </Helmet>
    </div>
  );
};

export default Login;
