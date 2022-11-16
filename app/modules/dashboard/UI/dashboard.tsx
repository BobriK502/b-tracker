import React from 'react';
import { useTranslation } from 'react-i18next';

const Dashboard: React.FunctionComponent<{}> = (): JSX.Element => {
  const { t } = useTranslation();
  return <div>{t('test')}</div>;
};

export default Dashboard;
