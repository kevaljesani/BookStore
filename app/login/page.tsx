import type { Metadata } from 'next';
import LoginClient from './LoginClient';

export const metadata: Metadata = {
  title: 'Login - BookStore Account',
  description: 'Login to your BookStore account or continue as guest to start shopping.',
  robots: 'noindex, follow', // Login page shouldn't be indexed
};

export default function LoginPage() {
  return <LoginClient />;
}