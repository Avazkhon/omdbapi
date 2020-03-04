import React from 'react';

import { asyncComponent } from '@jaredpalmer/after';

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./containers/Home'),
      Placeholder: () => <div>...LOADING HOMEPAGE...</div>,
    }),
  },
  {
    path: '/favorites',
    exact: true,
    component: asyncComponent({
      loader: () => import('./containers/Favorites'),
      Placeholder: () => <div>...LOADING FAVORITES...</div>,
    }),
  },
  {
    path: '/card/:imdbID/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./containers/CardFilm'),
      Placeholder: () => <div>...LOADING CARD FILM...</div>,
    }),
  },
  {
    path: '*',
    component: asyncComponent({
      loader: () => import('./containers/Notfound'),
      Placeholder: () => <div>...DONT PAGE</div>,
    }),
  },
];
