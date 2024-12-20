import React, { useState } from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import FormInput from '../components/auth/FormInput';
import SubmitButton from '../components/auth/SubmitButton';

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement signup logic
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <AuthLayout 
      title="Create your account" 
      subtitle="Start managing your properties today"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <FormInput
          id="name"
          name="name"
          type="text"
          label="Full name"
          autoComplete="name"
          required
        />

        <FormInput
          id="email"
          name="email"
          type="email"
          label="Email address"
          autoComplete="email"
          required
        />

        <FormInput
          id="password"
          name="password"
          type="password"
          label="Password"
          autoComplete="new-password"
          required
        />

        <FormInput
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirm password"
          autoComplete="new-password"
          required
        />

        <SubmitButton isLoading={isLoading}>Create account</SubmitButton>

        <div className="text-sm text-center">
          <span className="text-gray-600">Already have an account?</span>{' '}
          <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in
          </a>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Signup;