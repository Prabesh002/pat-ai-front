import React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card';
import { useNavigate } from 'react-router-dom';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';

import { title, container, text } from '@/modules/core/design-system/primitives'; 
import { useAuthService } from '../services/authService';
import type { LoginRequest } from '../api/models/LoginRequest';
import { AUTH_PAGE_ROUTES } from '../routes/authRouteConstants';

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
    <Card className={container({ blurred: true })}> 
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
            required
            value={formData.user_name}
            onChange={(e) => setFormData(prev => ({ ...prev, user_name: e.target.value }))}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            required
            type="password"
            value={formData.password}
            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          />
        </CardBody>
        <CardFooter className="flex flex-col gap-2">
          <Button color="primary" fullWidth type="submit">
            Sign In
          </Button>
          <p className={text({ size: 'sm', align: 'center' })}> 
            Don't have an account?{' '}
            <Button
              className="p-0 font-semibold"
              color="primary"
              variant="light"
              onClick={() => navigate(AUTH_PAGE_ROUTES.REGISTER)}
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