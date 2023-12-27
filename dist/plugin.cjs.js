'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

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
//# sourceMappingURL=plugin.cjs.js.map
