// utils/passiveEvents.js
export const addPassiveEventListener = (element, eventName, handler) => {
    const supportsPassive = () => {
        let supports = false;
        try {
            const opts = Object.defineProperty({}, 'passive', {
                get: () => {
                    supports = true;
                    return true;
                }
            });
            window.addEventListener('test', null, opts);
            window.removeEventListener('test', null, opts);
        } catch (e) { }
        return supports;
    };

    element.addEventListener(
        eventName,
        handler,
        supportsPassive() ? { passive: true } : false
    );
};