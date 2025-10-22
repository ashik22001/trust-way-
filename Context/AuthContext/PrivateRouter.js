'use client';
import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/navigation';
// import { useAuth } from '@/Context/AuthContext/AuthContext';

export default function PrivateRoute() {
  const { users, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !users) {
      router.push('/Auth');
    }
  }, [loading, users, router]);

  if (loading) {
    return <div className="text-center text-white">Checking authentication...</div>;
  }

  if (!users) {
    return null; // or a spinner, while redirecting
  }

  return (
    <div className="text-white p-10">
      <h1 className=' text-black'>Welcome, {users.displayName}</h1>
      <p className=' text-black'>This is a protected Dashboard page ✅</p>
    </div>
  );
}
