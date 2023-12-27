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
