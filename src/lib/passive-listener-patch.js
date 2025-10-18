if (typeof window !== 'undefined') {
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function (type, listener, options) {
        if (['touchstart', 'touchmove', 'wheel'].includes(type)) {
            if (typeof options === 'boolean') {
                options = { capture: options, passive: true };
            } else {
                options = { ...options, passive: true };
            }
        }
        return originalAddEventListener.call(this, type, listener, options);
    };
}