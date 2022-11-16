import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Bar, SideBar } from './modules/navigation';
import Container from './components/Container/Cotainer';

import constants from './constatns/constants';

const { navigation } = constants;

const App: React.FunctionComponent<{}> = () : JSX.Element => {
  const { t } = useTranslation();

  const mappedPathes = Object.keys(navigation.pathes).map((key: string) => ({
    label: t(`navigation.${key}`),
    to: navigation.pathes[key],
    icon: key,
  }));

  return (
    <>
      <Bar />
      <Container>
        <SideBar pathes={mappedPathes} />
        <Outlet />
      </Container>
    </>
  );
};

export default App;
