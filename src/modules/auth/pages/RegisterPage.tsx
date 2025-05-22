import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../forms/RegisterForm';
import { background } from '@/modules/core/design-system/primitives';
import { AUTH_PAGE_ROUTES } from '../routes/authRouteConstants';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
    navigate(AUTH_PAGE_ROUTES.LOGIN);
  };

  return (
    <div className={background({ color: 'slate' })}>
      <RegisterForm onSuccess={handleRegisterSuccess} />
    </div>
  );
};

export default RegisterPage;