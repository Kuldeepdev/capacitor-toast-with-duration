import { WebPlugin } from '@capacitor/core';
export class ToastWithDurationWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async show(options) {
        if (typeof document !== 'undefined') {
            let duration = 2000;
            if (options.durationMilliseconds) {
                duration = options.durationMilliseconds;
            }
            else if (options.duration) {
                duration = options.duration === 'long' ? 3500 : 2000;
            }
            const toast = document.createElement('pwa-toast');
            toast.duration = duration;
            toast.message = options.text;
            document.body.appendChild(toast);
        }
    }
}
//# sourceMappingURL=web.js.map