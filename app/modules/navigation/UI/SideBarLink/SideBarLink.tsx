import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';

import SideBarLinkIcon from '../SideBarLinkIcon/SideBarLinkIcon';

import sidebarState from '../../store/store';

import styles from './sidebarlik.module.css';

interface BarLinkInterface {
  path: string;
  label: string;
  icon: string;
  isActive: boolean;
}

const BarLink: React.FunctionComponent<BarLinkInterface> = (
  props: BarLinkInterface,
): JSX.Element => {
  const {
    path, label, icon, isActive,
  } = props;
  const { $isSidebarOpen } = sidebarState;

  const isSidebarOpen = useStore($isSidebarOpen);

  return (
    <div
      className={`${styles.barlink_container}  ${
        isActive ? `${styles.barlink_container__active} text-blue-500 hover:text-blue-400 font-semibold` : 'text-gray-400 hover:text-blue-400'
      }`}
    >
      <Link
        to={path}
        className={`${styles.barlink} ${isSidebarOpen ? 'justify-start' : 'justify-center'}`}
      >
        <SideBarLinkIcon
          title={label}
          type={icon}
        />
        {isSidebarOpen && <span className={`${styles.barlink_label}`}>{label}</span>}
      </Link>
    </div>
  );
};

export default BarLink;
