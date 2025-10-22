// src/app/Dashboard/page.js
'use client';

import React from 'react';
import PrivateRoute from '../../../Context/AuthContext/PrivateRouter';

export default function Page() {
  return <PrivateRoute />;
}
