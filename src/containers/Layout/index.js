import React from 'react';

import Header from '../Header';

import './index.css';
const Layout = (props) => (
  <React.StrictMode>
    <Header/>
    {props.children}
  </React.StrictMode>
);

export default Layout;
