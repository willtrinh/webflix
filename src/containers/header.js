import React from 'react';
import { Header } from '../components/';
import * as ROUTES from '../constants/routes';
import logo from '../logo.png';
export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Home" src={logo} />
        {window.location.pathname === '/' ? (
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        ) : null}
      </Header.Frame>
      {children}
    </Header>
  );
}
