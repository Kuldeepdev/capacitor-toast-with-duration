var capacitorToastWithDuration = (function (exports, core) {
    'use strict';

    const ToastWithDuration = core.registerPlugin('ToastWithDuration', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.ToastWithDurationWeb()),
    });

    class ToastWithDurationWeb extends core.WebPlugin {
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

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ToastWithDurationWeb: ToastWithDurationWeb
    });

    exports.ToastWithDuration = ToastWithDuration;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
