import React, { useId } from 'react';
import { useStore } from 'effector-react';
import { useLocation } from 'react-router-dom';

import SideBarLink from '../SideBarLink/SideBarLink';

import sidebarState from '../../store/store';

import styles from './sidebar.module.css';

type Path = {
  label: string,
  to: string,
  icon: string,
};

interface ISideBar {
  pathes: Path[],
}

const SideBar: React.FunctionComponent<ISideBar> = (props: ISideBar): JSX.Element => {
  const { $isSidebarOpen } = sidebarState;
  const { pathes } = props;

  const id = useId();
  const { pathname } = useLocation();

  const isSidebarOpen = useStore($isSidebarOpen);

  return (
    <nav
      className={`${styles.sidebar} ${
        isSidebarOpen ? styles.sidebar__expanded : styles.sidebar__collapsed
      }`}
    >
      {pathes.map((path) => (
        <SideBarLink
          path={path.to}
          label={path.label}
          icon={path.icon}
          isActive={path.to === pathname}
          key={`${id}-${path.label}`}
        />
      ))}
    </nav>
  );
};

export default SideBar;
