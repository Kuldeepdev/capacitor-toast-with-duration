import { registerPlugin } from '@capacitor/core';

import type { ToastWithDurationPlugin } from './definitions';

const ToastWithDuration = registerPlugin<ToastWithDurationPlugin>(
  'ToastWithDuration',
  {
    web: () => import('./web').then(m => new m.ToastWithDurationWeb()),
  },
);

export * from './definitions';
export { ToastWithDuration };
