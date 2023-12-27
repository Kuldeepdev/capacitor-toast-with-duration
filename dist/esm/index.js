import { registerPlugin } from '@capacitor/core';
const ToastWithDuration = registerPlugin('ToastWithDuration', {
    web: () => import('./web').then(m => new m.ToastWithDurationWeb()),
});
export * from './definitions';
export { ToastWithDuration };
//# sourceMappingURL=index.js.map