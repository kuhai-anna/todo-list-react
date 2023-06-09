import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
        <RegisterForm />
      </Helmet>
    </div>
  );
};

export default Register;
