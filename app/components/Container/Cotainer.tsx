import React, { ReactNode } from 'react';

import styles from './container.module.css';

// eslint-disable-next-line react/function-component-definition
const Container : React.FunctionComponent<{ children: ReactNode }> = (props): JSX.Element => {
  const { children } = props;
  return (
    <div className={`${styles.container} bg-neutral-100`}>
      {children}
    </div>
  );
};

export default Container;
