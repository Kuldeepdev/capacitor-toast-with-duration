import { WebPlugin } from '@capacitor/core';
import type { ToastWithDurationPlugin } from './definitions';
export declare class ToastWithDurationWeb extends WebPlugin implements ToastWithDurationPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
