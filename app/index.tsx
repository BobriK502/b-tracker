import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import App from './App';
import DashboradModule from './modules/dashboard';
import IncomeModule from './modules/income';
import PlanningModule from './modules/planning';
import AnalythicModule from './modules/analythic';

import constants from './constatns/constants';

import './styles/global.css';

import i18n from './localization/index';

const { navigation } = constants;
const { Dashboard } = DashboradModule;
const { Income } = IncomeModule;
const { Planning } = PlanningModule;
const { Analythic } = AnalythicModule;

const rootElement = document.getElementById('app') as HTMLElement;

const Root: React.FunctionComponent<{}> = (): JSX.Element => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <Routes>
        <Route
          path={navigation.pathes.dashboard}
          element={<App />}
        >
          <Route
            path={navigation.pathes.dashboard}
            element={<Dashboard />}
          />
          <Route
            path={navigation.pathes.income}
            element={<Income />}
          />
          <Route
            path={navigation.pathes.planning}
            element={<Planning />}
          />
          <Route
            path={navigation.pathes.analythic}
            element={<Analythic />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </I18nextProvider>
);

const root = ReactDOM.createRoot(rootElement);

root.render(<Root />);
