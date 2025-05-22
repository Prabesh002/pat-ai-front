import React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card';
import { useNavigate } from 'react-router-dom';
import { title } from '@/modules/core/design-system/primitives';
import { useAuthService } from '../services/authService';
import { LoginRequest } from '../api/models/LoginRequest';
import { AUTH_PAGE_ROUTES } from '../routes/authRouteConstants';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';

export interface LoginFormProps {
  onSuccess?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const navigate = useNavigate();
  const { login } = useAuthService();
  const [formData, setFormData] = React.useState<LoginRequest>({
    user_name: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData);
      onSuccess?.();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <h1 className={title({ size: 'md', color: 'blue' })}>
          Welcome Back
        </h1>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardBody className="gap-4">
          <Input
            label="Username"
            placeholder="Enter your username"
            value={formData.user_name}
            onChange={(e) => setFormData(prev => ({ ...prev, user_name: e.target.value }))}
            required
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
            required
          />
        </CardBody>
        <CardFooter className="flex flex-col gap-2">
          <Button type="submit" color="primary" fullWidth>
            Sign In
          </Button>
          <p className="text-sm text-default-500 text-center">
            Don't have an account?{' '}
            <Button
              variant="light"
              color="primary"
              onClick={() => navigate(AUTH_PAGE_ROUTES.REGISTER)}
              className="p-0 font-semibold"
            >
              Sign Up
            </Button>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginForm;