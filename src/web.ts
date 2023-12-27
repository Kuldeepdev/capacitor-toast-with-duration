import { WebPlugin } from '@capacitor/core';

import type { ShowOptions, ToastWithDurationPlugin } from './definitions';

export class ToastWithDurationWeb
  extends WebPlugin
  implements ToastWithDurationPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async show(options: ShowOptions): Promise<void> {
    if (typeof document !== 'undefined') {
      let duration = 2000;
      if (options.durationMilliseconds) {
        duration = options.durationMilliseconds;
      } else if (options.duration) {
        duration = options.duration === 'long' ? 3500 : 2000;
      }
      const toast = document.createElement('pwa-toast') as any;
      toast.duration = duration;
      toast.message = options.text;
      document.body.appendChild(toast);
    }
  }
}
