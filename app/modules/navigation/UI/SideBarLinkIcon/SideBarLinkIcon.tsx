import React, { useMemo } from 'react';
import {
  ChartBarSquareIcon,
  CreditCardIcon,
  CalendarDaysIcon,
  ComputerDesktopIcon,
  DocumentIcon,
} from '@heroicons/react/24/solid';

import styles from './sidebarlinkicon.module.css';

type IconsMap = {
  [key: string]: (
    props: React.ComponentProps<'svg'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  ) => JSX.Element;
};

const IconsByType: IconsMap = {
  dashboard: ComputerDesktopIcon,
  planning: CalendarDaysIcon,
  analythic: ChartBarSquareIcon,
  income: CreditCardIcon,
};

interface ISideBarLinkIcon {
  type: string;
  title: string;
}
const SideBarLinkIcon: React.FunctionComponent<ISideBarLinkIcon> = (
  props: ISideBarLinkIcon,
): JSX.Element => {
  const { type, title } = props;
  const IconComponent = useMemo(() => IconsByType[type] ?? DocumentIcon, [type]);
  return <IconComponent title={title} className={`${styles.icon}`} />;
};

export default SideBarLinkIcon;
