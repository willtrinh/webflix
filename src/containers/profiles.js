import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.png';

export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Webflix logo" />
        </Header.Frame>
      </Header>
    </>
  );
}
