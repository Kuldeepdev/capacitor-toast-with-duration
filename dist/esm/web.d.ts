import { WebPlugin } from '@capacitor/core';
import type { ShowOptions, ToastWithDurationPlugin } from './definitions';
export declare class ToastWithDurationWeb extends WebPlugin implements ToastWithDurationPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    show(options: ShowOptions): Promise<void>;
}
