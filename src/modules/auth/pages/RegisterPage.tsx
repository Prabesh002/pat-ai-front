import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../forms/RegisterForm';
import { background } from '@/modules/core/design-system/primitives';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
    navigate('/');
  };

  return (
    <div className={background({ color: 'slate' })}>
      <RegisterForm onSuccess={handleRegisterSuccess} />
    </div>
  );
};

export default RegisterPage;