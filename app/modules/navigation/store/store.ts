import { createStore } from 'effector';

import effects from '../events/events';

const { toggleSideBar } = effects;

const $isSidebarOpen = createStore(true).on(toggleSideBar, (state: boolean) => !state);

export default { $isSidebarOpen };
