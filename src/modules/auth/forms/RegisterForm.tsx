import React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card';
import { useNavigate } from 'react-router-dom';
import { container, text, title } from '@/modules/core/design-system/primitives';
import { useAuthService } from '../services/authService';
import { RegisterRequest } from '../api/models/RegisterRequest';
import { AUTH_PAGE_ROUTES } from '../routes/authRouteConstants';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';

export interface RegisterFormProps {
  onSuccess?: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
  const navigate = useNavigate();
  const { register } = useAuthService();
  const [formData, setFormData] = React.useState<RegisterRequest>({
    user_name: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(formData);
      onSuccess?.();
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Card className={container({ blurred: true })}>
      <CardHeader>
        <h1 className={title({ size: 'md', color: 'violet' })}>
          Create Account
        </h1>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardBody className="gap-4">
          <Input
            label="Username"
            placeholder="Choose a username"
            value={formData.user_name}
            onChange={(e) => setFormData(prev => ({ ...prev, user_name: e.target.value }))}
            required
          />
          <Input
            label="Password"
            type="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
            required
          />
        </CardBody>
        <CardFooter className="flex flex-col gap-2">
          <Button type="submit" color="primary" fullWidth>
            Sign Up
          </Button>
          <p className={text({ size: 'sm', align: 'center' })}>
            Already have an account?{' '}
            <Button
              variant="light"
              color="primary"
              onClick={() => navigate(AUTH_PAGE_ROUTES.LOGIN)}
              className="p-0 font-semibold"
            >
              Sign In
            </Button>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};

export default RegisterForm;