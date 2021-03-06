import React from 'react';

import Home from 'src/containers/Home';

export const ROUTES = [
  { name: 'HOME', path: '/', view: Home, exact: true },
  { name: 'ABOUT', path: '/about', view:  () => (<div>about</div>) },
  { name: 'LOGIN', path: '/login', view:  () => (<div>login</div>) },
  { name: 'REGISTER', path: '/register', view:  () => (<div>register</div>) },
  { name: 'USER', path: '/user/:userId/profile', view:  () => (<div>user</div>) },
];

export const ROUTE_NAMES = ROUTES.reduce((obj, { path, name }) => ({ ...obj, [name]: path }), {});
