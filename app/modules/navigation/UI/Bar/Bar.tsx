import React from 'react';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { useStore } from 'effector-react';

import effects from '../../events/events';
import sidebarState from '../../store/store';

import styles from './bar.module.css';

function Bar(): JSX.Element {
  const { toggleSideBar } = effects;

  const { $isSidebarOpen } = sidebarState;

  const isSidebarOpen = useStore($isSidebarOpen);

  return (
    <div className={`${styles.bar}`}>
      <div className={styles.bar_content}>
        <button
          onClick={() => toggleSideBar()}
          type="button"
          className={`${styles.bar_button} 
          rounded hover:bg-blue-400 
          ${
            isSidebarOpen
              ? 'bg-blue-500 text-gray-300'
              : 'text-neutral-100 bg-gray-300 hover:backdrop-blur-sm'
          }`}
        >
          <Bars2Icon className={styles.bar_button_icon} />
        </button>
      </div>
    </div>
  );
}

export default Bar;
