import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../forms/RegisterForm';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-tr from-blue-100 to-violet-100 dark:from-blue-900 dark:to-violet-900">
      <RegisterForm onSuccess={handleRegisterSuccess} />
    </div>
  );
};

export default RegisterPage;