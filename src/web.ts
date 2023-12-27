import { WebPlugin } from '@capacitor/core';

import type { ToastWithDurationPlugin } from './definitions';

export class ToastWithDurationWeb
  extends WebPlugin
  implements ToastWithDurationPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
