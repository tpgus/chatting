import React from 'react';
import Header from './Header';
import Main from './Main';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      {/* <Footer/> */}
    </>
  );
};

export default Layout;
